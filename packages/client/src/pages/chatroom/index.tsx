import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
} from 'react'
import {
  convertToLL, getCurTimeDBFormat,
} from 'common/utils'
import { WithAuthProps } from 'hocs/withAuth'
import ChatBox from 'components/ChatBox'
import DateDivier from 'components/DateDivider'
import { chatFromClient } from 'socket'
import { ChatStateGroupByTime } from 'containers/ChatRoomContainer'
import Icon from 'Icon/Icon'
import SearchAccordion from 'system/ChatRoomSearchBar'
import { useIntersectionObserver } from 'hooks/index'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { getChatRequest } from 'modules/chat'
import { RootState } from 'modules'
import * as S from './style'
import Header from './Header'

const {
  useEffect, useRef, useState, useCallback,
} = React

interface Props extends WithAuthProps{
  roomUuid: string
  handleBack: () => void
  roomName: string
  chatStateGroupByTime: ChatStateGroupByTime,
}

const ChatRoom: FC<Props> = ({
  uuid,
  roomUuid,
  handleBack,
  roomName,
  chatStateGroupByTime,
}) => {
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const ChatBottomRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const chatTopRef = useRef<HTMLDivElement>(null)
  const [hasContent, setHasContent] = useState<boolean>(false)
  const dateToday = useRef<string>('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const dispatch = useDispatch()
  const chatState = useSelector((state: RootState) => state.chat)

  const handleSubmit = () => {
    if (!messageRef || !messageRef.current || !messageRef.current.value.trim().length) {
      return
    }

    const msg = messageRef.current.value
    const createdAt = getCurTimeDBFormat()
    chatFromClient({
      content: msg,
      roomUuid,
      createdAt,
      userUuid: uuid,
    })

    if (messageRef.current) {
      messageRef.current.focus()
      messageRef.current.value = ''
    }
  }
  const handleEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.target && e.currentTarget.value.trim().length > 0) {
        handleSubmit()
      }
    }
  }

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (messageRef.current) {
      if (messageRef.current.value) {
        setHasContent(true)
      } else {
        setHasContent(false)
      }
    }
  }

  const toggleSearchBar = useCallback(() => {
    setIsSearchOpen(!isSearchOpen)
  }, [isSearchOpen, setIsSearchOpen])
  const onIntersect: IntersectionObserverCallback = ([{
    isIntersecting, time,
  }]) => {
    if (!isIntersecting) return
    // if (time < 10000) return
    if (chatState.isLoading) {
      return
    }
    dispatch(getChatRequest({
      roomUuid,
      offset: chatState.data[roomUuid].offset,
      limit: chatState.data[roomUuid].offset,
    }))
  }

  useEffect(() => {
    if (ChatBottomRef && ChatBottomRef.current) {
      ChatBottomRef.current.scrollIntoView()
    }
  }, [chatStateGroupByTime])

  useIntersectionObserver({
    target: chatTopRef.current,
    onIntersect,
  })
  const MemoizedHeader = React.memo(Header)
  return (
    <S.Container>
      <MemoizedHeader roomName={roomName} toggleSearchBar={toggleSearchBar}/>
      <SearchAccordion
        open={isSearchOpen}
        toggleSearchBar={toggleSearchBar}
      />

      <S.ChatContainer ref={chatContainerRef}>
        {
          chatState.isLoading === false && <div ref={chatTopRef} id="observe"/>
        }
        {
          !chatStateGroupByTime
            ? (<div>loading</div>)
            : (
              (
                Object.keys(chatStateGroupByTime).map((time) => {
                  const timeGroup = chatStateGroupByTime[time]
                  return timeGroup.map((chatGroup) => {
                    let isNewDate = false
                    const dateLL = convertToLL(chatGroup[0].createdAt)
                    if (dateToday.current !== dateLL) {
                      isNewDate = true
                      dateToday.current = dateLL
                    }
                    return (
                      <div key={chatGroup[0].uuid} className="observe">
                        {
                          isNewDate && <DateDivier date={dateLL}/>
                        }
                        <ChatBox
                          createdAt={chatGroup[0].createdAt}
                          chatGroup={chatGroup}
                          isMine={uuid === chatGroup[0].metaInfo.sender.uuid}
                        />
                      </div>
                    )
                  })
                })
              )
            )
        }
        <S.ChatBottom ref={ChatBottomRef}></S.ChatBottom>
      </S.ChatContainer>
      <S.InputContainer>
        <S.Input
          ref={messageRef}
          onChange={handleMessageChange}
          onKeyPress={handleEnterPress}
        />
        <S.ButtonWrapper>
          <S.SendBtn
            onClick={handleSubmit}
            hasContent={hasContent}
          >
            전송
          </S.SendBtn>
        </S.ButtonWrapper>
      </S.InputContainer>
    </S.Container>
  )
}

export default ChatRoom
