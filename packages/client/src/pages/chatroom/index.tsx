import React, { FC } from 'react'
import { useRouteMatch } from 'react-router-dom'
import SearchAccordion from 'system/ChatRoomSearchBar'
import { getChatRequest } from 'modules/chat'
import { useAuth } from 'hooks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'modules'
import {
  chatFromServer,
  joinRooms,
  removeSocketEventListener,
} from 'socket'
import { Sockets } from '@kakio/common'
import Header from './Header'
import TextArea from './TextArea'
import ChatArea from './ChatArea'
import * as S from './style'

const {
  useEffect, useState, useCallback,
} = React

const ChatRoom: FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { params } = useRouteMatch<{roomUuid: string}>()
  const [roomUuid, setRoomUuid] = useState('')
  const [roomName, setRoomName] = useState<string>('')
  const dispatch = useDispatch()
  const roomState = useSelector((state: RootState) => state.room)
  const { isLoggedIn } = useAuth()
  const { uuid } = useSelector((state: RootState) => state.profile)
  const toggleSearchBar = useCallback(() => {
    setIsSearchOpen(!isSearchOpen)
  }, [isSearchOpen, setIsSearchOpen])

  useEffect(() => {
    if (roomUuid.length) {
      joinRooms({ roomUuids: [roomUuid] })
    }
  }, [roomUuid])

  useEffect(() => {
    setRoomUuid(params.roomUuid)
    const limit = 30
    const offset = 0
    dispatch(getChatRequest({
      roomUuid: params.roomUuid,
      limit,
      offset,
    }))
  }, [])

  useEffect(() => {
    const rn = roomState.data.find((v) => v.uuid === roomUuid)
    if (!rn) {
      return
    }

    setRoomName(rn.participants.map((v) => v.name).join(', '))
  }, [roomState, roomUuid])

  useEffect(() => {
    setRoomUuid(params.roomUuid)
  }, [params])

  useEffect(() => {
    chatFromServer(dispatch)

    return (() => {
      removeSocketEventListener(Sockets.EventMap.chatFromServer)
    })
  })
  return (
    <S.Container>
      <Header roomName={roomName} toggleSearchBar={toggleSearchBar}/>
      <SearchAccordion
        open={isSearchOpen}
        toggleSearchBar={toggleSearchBar}
      />
      <ChatArea roomUuid={roomUuid} userUuid={uuid}/>
      <TextArea roomUuid={roomUuid} userUuid={uuid}/>
    </S.Container>
  )
}

export default ChatRoom
