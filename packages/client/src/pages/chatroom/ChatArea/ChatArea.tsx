import React from 'react'
import { ApiChat } from 'types'
import * as request from 'common/request'
import { APIs } from '@kakio/common'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'
import ChatList from './ChatList'
import * as S from './styles'

const {
  useRef,
  useState,
  useEffect,
} = React

interface Props{
  userUuid: string
  roomUuid: string
}
const ChatArea: React.FC<Props> = ({
  userUuid,
  roomUuid,
}) => {
  const [firstChat, setFirstChat] = useState<APIs.GetFirstChat | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const chatBottomRef = useRef<HTMLDivElement>(null)
  const chatState = useSelector((state: RootState) => state.chat)

  // useEffect(() => {
  //   if (!chatContainerRef.current) return
  //   console.log(chatContainerRef.current.scrollTop)
  // }, [chatState])

  useEffect(() => {
    if (!roomUuid) return
    const fetch = async () => {
      try {
        const data = await request.getFirstChat({ roomUuid })
        setFirstChat(data)
      } catch (e) {
        setFirstChat(null)
      }
    }
    fetch()
  }, [roomUuid, chatState.data[roomUuid]])

  return (
    <S.Container ref={chatContainerRef}>
      <ChatList
        userUuid={userUuid}
        roomUuid={roomUuid}
        chatBottomRef={chatBottomRef}
        firstChat={firstChat}
        chatContainerRef={chatContainerRef}
      />
      <S.ChatBottom ref={chatBottomRef}></S.ChatBottom>
    </S.Container>
  )
}

export default ChatArea
