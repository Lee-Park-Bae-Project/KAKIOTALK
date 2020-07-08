import React from 'react'
import { ApiChat } from 'types'
import * as request from 'common/request'
import { APIs } from '@kakio/common'
import ChatList from './ChatList'
import * as S from './styles'

export interface ChatStateGroupByTime {
  [key: string]: ApiChat[][]
}

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

  useEffect(() => {
    if (!roomUuid) return
    const fetch = async () => {
      const response = await request.getFirstChat({ roomUuid })
      setFirstChat(response.data.data)
    }

    fetch()
  }, [roomUuid])

  return (
    <S.Container ref={chatContainerRef}>
      <ChatList
        userUuid={userUuid}
        roomUuid={roomUuid}
        chatBottomRef={chatBottomRef}
        firstChat={firstChat}
      />
      <S.ChatBottom ref={chatBottomRef}></S.ChatBottom>
    </S.Container>
  )
}

export default ChatArea
