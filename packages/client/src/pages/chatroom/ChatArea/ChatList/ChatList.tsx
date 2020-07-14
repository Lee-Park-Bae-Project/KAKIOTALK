import React from 'react'
import styled from 'styled-components'
import { ApiChat } from 'types'
import { APIs } from '@kakio/common'
import DateDivider from 'components/DateDivider'
import ChatBox from 'components/ChatBox'
import { getChatRequest } from 'modules/chat'
import { useIntersectionObserver } from 'hooks'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { RootState } from 'modules'

const S = { Container: styled.div`
    display: flex;
    flex-direction: column-reverse;
  ` }

const {
  useEffect,
  useRef,
} = React
interface Props{
  userUuid: string
  roomUuid: string
  chatBottomRef: React.RefObject<HTMLDivElement>
  firstChat: APIs.GetFirstChat | null
}

export interface ChatStateGroupByTime {
  [key: string]: ApiChat[][]
}

const ChatList: React.FC<Props> = ({
  userUuid,
  roomUuid,
  chatBottomRef,
  firstChat,
}) => {
  const dateToday = useRef<string>('')
  const dispatch = useDispatch()
  const chatState = useSelector((state: RootState) => state.chat)
  const limit = 30
  const offset = useRef(0)

  const last = useIntersectionObserver((isVisible) => {
    if (isVisible) {
      dispatch(getChatRequest({
        roomUuid,
        offset: offset.current,
        limit,
      }))
      offset.current += limit
    }
  }, [roomUuid])

  useEffect(() => {
    if (!chatBottomRef || !chatBottomRef.current) return
    chatBottomRef.current.scrollIntoView()
  }, [chatBottomRef])

  if (chatState.isLoading) {
    return <div>loading</div>
  }

  if (!chatState.data[roomUuid]) {
    return <div>loading</div>
  }
  if (!firstChat) {
    return <div>loading</div>
  }
  const { chats } = chatState.data[roomUuid]

  return (
    <S.Container>
      {
        chats.map((chat, idx) => (
          <ChatBox
            key={chat.uuid}
            chat={chat}
            isMine={userUuid === chat.metaInfo.sender.uuid}
            ref={idx === chats.length - 1 && chat.uuid !== firstChat.uuid ? last : null}
          />
        ))
      }
    </S.Container>
  )
}

export default React.memo(ChatList)
