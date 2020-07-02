import React, { FC } from 'react'
import {
  convertToLL, getCurTimeDBFormat,
} from 'common/utils'
import { WithAuthProps } from 'hocs/withAuth'
import ChatBox from 'components/ChatBox'
import DateDivier from 'components/DateDivider'
import { ChatStateGroupByTime } from 'containers/ChatRoomContainer'
import SearchAccordion from 'system/ChatRoomSearchBar'
import { useIntersectionObserver } from 'hooks/index'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { getChatRequest } from 'modules/chat'
import { RootState } from 'modules'
import shortid from 'shortid'
import * as S from './style'
import Header from './Header'
import TextArea from './TextArea'

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
  const ChatBottomRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const chatTopRef = useRef<HTMLDivElement>(null)
  const dateToday = useRef<string>('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const dispatch = useDispatch()
  const chatState = useSelector((state: RootState) => state.chat)

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
  return (
    <S.Container>
      <Header roomName={roomName} toggleSearchBar={toggleSearchBar}/>
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
                      <div key={shortid.generate()} className="observe">
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
      <TextArea roomUuid={roomUuid} userUuid={uuid}/>
    </S.Container>
  )
}

export default ChatRoom
