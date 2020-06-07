import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  convertDBTimeTohhmmA, getCurTimeDBFormat,
} from 'common/utils'
import { WithAuthProps } from 'hocs/withAuth'
import ChatBox from 'components/ChatBox'
import {
  ApiChat, ReduxChatType, ReduxState,
} from 'types'
import { chatFromClient } from 'socket'
import * as S from './style'

interface Props extends WithAuthProps{
  chatState: ReduxState<ReduxChatType>;
  roomUuid: string;
  handleBack: () => void;
  roomName: string;
}
interface ChatStateGroupByTime {
  [key: string]: ApiChat[][]
}
const ChatRoom: FC<Props> = ({
  chatState,
  uuid,
  roomUuid,
  handleBack,
  roomName,
}) => {
  const messageRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [message, setMessage] = useState<string>('')
  const [isFirstScroll, setIsFirstScroll] = useState<boolean>(true)
  const [chatStateGroupByTime, SetChatStateGroupByTime] = useState<ChatStateGroupByTime>({})
  useEffect(() => {
    if (!chatState.data[roomUuid]) {
      return
    }
    if (isFirstScroll) {
      setIsFirstScroll(false)
      if (chatContainerRef && chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
      }
      return
    }
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatState,
    roomUuid,
    isFirstScroll])

  const handleSubmit = () => {
    if (!messageRef) {
      return
    }

    chatFromClient({
      content: message,
      roomUuid,
      createdAt: getCurTimeDBFormat(),
      userUuid: uuid,
    })

    if (messageRef.current) {
      messageRef.current.focus()
    }
    setMessage('')
  }
  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.target && e.currentTarget.value.trim().length > 0) {
        handleSubmit()
      }
    }
  }

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }
  useEffect(() => {
    if (chatState.data[roomUuid]) {
      interface ChatStateGroupByTime {
        [key: string]: ApiChat[][]
      }
      const init: ChatStateGroupByTime = {}
      const newChatStateGroupByTime = chatState.data[roomUuid].reduce((acc, cur) => {
        const key = convertDBTimeTohhmmA(cur.createdAt)
        if (acc[key]) {
          const len = acc[key].length
          if (acc[key][len - 1][0].metaInfo.sender.uuid === cur.metaInfo.sender.uuid) {
            acc[key][len - 1].push(cur)
          } else {
            acc[key].push([cur])
          }
          return acc
        }

        acc[key] = [[cur]]
        return acc
      }, init)
      SetChatStateGroupByTime(newChatStateGroupByTime)
    }
  }, [chatState])

  return (
    <S.Container>
      <S.Header>
        <S.Back onClick={handleBack}>
          back
        </S.Back>
        <S.Title>
          {roomName}
        </S.Title>
      </S.Header>
      <S.ChatContainer ref={chatContainerRef}>
        {
          !chatState.data[roomUuid]
            ? (<div>loading</div>)
            : (
              (
                Object.keys(chatStateGroupByTime).map((time) => {
                  const timeGroup = chatStateGroupByTime[time]
                  return timeGroup.map((chatGroup) => (
                      <ChatBox
                        key={chatGroup[0].uuid}
                        createdAt={time}
                        chatGroup={chatGroup}
                        isMine={uuid === chatGroup[0].metaInfo.sender.uuid}
                      />
                  ))
                })
              )
            )
        }
        <S.ChatBottom ref={scrollRef}></S.ChatBottom>
      </S.ChatContainer>
      <S.InputContainer>
        <S.InputArea
          ref={messageRef}
          value={message}
          onChange={handleMessageChange}
          onKeyPress={handleEnterPress}
        />
        <S.ButtonWrapper>
          <S.SendBtn onClick={handleSubmit}>전송</S.SendBtn>
        </S.ButtonWrapper>
      </S.InputContainer>
    </S.Container>
  )
}

export default ChatRoom
