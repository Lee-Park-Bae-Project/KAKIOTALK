import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
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
import * as S from './style'

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
  const scrollRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [hasContent, setHasContent] = useState<boolean>(false)
  const dateToday = useRef<string>('')

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollIntoView()
    }
  }, [chatStateGroupByTime])

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

  return (
    <S.Container>
      <S.Header>
        <Icon icon="ArrowLeft" onClick={handleBack}/>
        <S.Title>{roomName}</S.Title>
        <div style={{ display: 'flex' }}>
          <div style={{ margin: 'auto 0.5rem' }}>
            <Icon icon="Search" size='1rem' css={{ margin: 'auto 0.5rem' }}/>
          </div>
          <Icon icon="Menu"/>
        </div>
      </S.Header>
      <S.ChatContainer ref={chatContainerRef}>
        {
          !chatStateGroupByTime
            ? (<div>loading</div>)
            : (
              (
                Object.keys(chatStateGroupByTime).map((time) => {
                  const timeGroup = chatStateGroupByTime[time]
                  return timeGroup.map((chatGroup) => {
                    // console.log(chatGroup)
                    let isNewDate = false
                    const dateLL = convertToLL(chatGroup[0].createdAt)
                    if (dateToday.current !== dateLL) {
                      isNewDate = true
                      dateToday.current = dateLL
                    }
                    return (
                      <>
                        {
                          isNewDate && <DateDivier date={dateLL} key={chatGroup[0].createdAt}/>
                        }
                        <ChatBox
                          key={chatGroup[0].uuid}
                          createdAt={chatGroup[0].createdAt}
                          chatGroup={chatGroup}
                          isMine={uuid === chatGroup[0].metaInfo.sender.uuid}
                        />
                      </>
                    )
                  })
                })
              )
            )
        }
        <S.ChatBottom ref={scrollRef}></S.ChatBottom>
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
