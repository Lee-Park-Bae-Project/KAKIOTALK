import React from 'react'
import { ApiChat } from 'types'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { RootState } from 'modules'
import { getChatRequest } from 'modules/chat'
import { useIntersectionObserver } from 'hooks'
import ChatList from './ChatList'
import * as S from './styles'

export interface ChatStateGroupByTime {
  [key: string]: ApiChat[][]
}

const {
  useRef,
  useState,
  useEffect,
  useCallback,
} = React

interface Props{
  userUuid: string
  roomUuid: string
}
const ChatArea: React.FC<Props> = ({
  userUuid,
  roomUuid,
}) => {
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const chatTopRef = useRef<HTMLDivElement>(null)
  const chatBottomRef = useRef<HTMLDivElement>(null)
  const chatState = useSelector((state: RootState) => state.chat)
  const dispatch = useDispatch()

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (!isIntersecting) return
    if (chatState.isLoading) {
      return
    }
    dispatch(getChatRequest({
      roomUuid,
      offset: chatState.data[roomUuid].offset,
      limit: chatState.data[roomUuid].offset,
    }))
  }

  useIntersectionObserver({
    target: chatTopRef.current,
    onIntersect,
  })

  return (
    <S.Container ref={chatContainerRef}>
      {
        chatState.isLoading === false && <div ref={chatTopRef} id="observe"/>
      }
      <ChatList
        userUuid={userUuid}
        roomUuid={roomUuid}
        chatState={chatState}
        chatBottomRef={chatBottomRef}
      />
    <S.ChatBottom ref={chatBottomRef}></S.ChatBottom>
    </S.Container>
  )
}

export default ChatArea
