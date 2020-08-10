import React from 'react'
import styled from 'styled-components'
import { ApiChat } from 'types'
import { APIs } from '@kakio/common'
import { Loader } from 'components'
import ChatBox from 'components/ChatBox'
import { loadMoreRequest } from 'modules/chat'
import {
  useIntersectionObserver,
  usePrevious,
} from 'hooks'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { RootState } from 'modules'
import * as S from './styles'

const {
  useState,
  useEffect,
  useRef,
  useCallback,
} = React
interface Props{
  userUuid: string
  roomUuid: string
  chatBottomRef: React.RefObject<HTMLDivElement>
  firstChat: APIs.GetFirstChat | null
  chatContainerRef: React.RefObject<HTMLDivElement>
}

const ChatList: React.FC<Props> = ({
  userUuid,
  roomUuid,
  chatBottomRef,
  firstChat,
  chatContainerRef,
}) => {
  const dateToday = useRef<string>('')
  const dispatch = useDispatch()
  const chatState = useSelector((state: RootState) => state.chat)
  const root = useRef<HTMLDivElement>(null)
  const restorePos = useRef<HTMLDivElement>()
  const [scrollHeight, setScrollHeight] = useState(10000)
  const prevScrollHeight = usePrevious(scrollHeight)
  const prevChats = usePrevious(chatState.data[roomUuid])

  const lastTop = useCallback((node: HTMLDivElement) => {
    restorePos.current = node
  }, [])

  const first = useIntersectionObserver(
    (entry: IntersectionObserverEntry) => {
      if (entry.time < 5000) return
      if (!entry.isIntersecting) {
        return
      }
      dispatch(loadMoreRequest(roomUuid))
    },
    { root: root.current },
    [roomUuid]
  )

  useEffect(() => {
    if (!chatBottomRef.current) return
    if (!chatContainerRef.current) return
    if (!prevScrollHeight) return
    const target = chatContainerRef.current
    const { chats } = chatState.data[roomUuid]

    if (!prevChats || !prevChats.chats.length) return
    // 다른 사람이 채팅 보낸 경우
    if (prevChats.chats[0].metaInfo.sender.uuid !== userUuid) return
    // load more 했을 경우
    if (prevChats.chats[prevChats.chats.length - 1].uuid !== chats[chats.length - 1].uuid) {
      target.scrollTop = target.scrollHeight - prevScrollHeight
      setScrollHeight(target.scrollHeight)
      return
    }
    // 내가 보낸 경우
    target.scrollTop = target.scrollHeight
  }, [chatState.data[roomUuid]])

  if (!chatState.data[roomUuid]) {
    return <Loader/>
  }
  const { chats } = chatState.data[roomUuid]

  return (
    <S.Container>
      { chatState.isLoading && <Loader/> }
      <S.Content ref={root}>
        {
            firstChat && chats.map((chat, idx) => (
              <div key={chat.uuid} ref={idx === chats.length - 1 ? lastTop : null}>
                <ChatBox
                  chat={chat}
                  isMine={userUuid === chat.metaInfo.sender.uuid}
                  ref={idx === chats.length - 1 && chat.uuid !== firstChat.uuid ? first : null}
                />
              </div>
            ))
        }
      </S.Content>
      <div ref={chatBottomRef}></div>

    </S.Container>
  )
}

export default React.memo(ChatList)
