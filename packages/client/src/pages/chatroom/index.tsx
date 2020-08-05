import React, { FC } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ChatRoomSearchBar as SearchAccordion } from 'system'
import { getChatRequest } from 'modules/chat'
import {
  getRoomRequest, leaveRoomRequest,
} from 'modules/room'

import { useAuth } from 'hooks'
import {
  useDispatch, useSelector,
} from 'react-redux'
import {
  Dialog, Drawer,
} from 'components'
import Icon from 'Icon/Icon'
import { RootState } from 'modules'
import { joinRooms } from 'modules/socket'
import * as S from './style'
import ChatArea from './ChatArea'
import TextArea from './TextArea'
import Header from './Header'

import MenuDrawer from './MenuDrawer'

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isLeaveAlertOpen, setIsLeaveAlertOpen] = useState(false)
  const toggleSearchBar = useCallback(() => {
    setIsSearchOpen(!isSearchOpen)
  }, [isSearchOpen, setIsSearchOpen])

  const handleLeaveRoom = () => {
    dispatch(leaveRoomRequest(roomUuid))
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  useEffect(() => {
    if (roomUuid.length) {
      dispatch(joinRooms({ roomUuids: [roomUuid] }))
      dispatch(getRoomRequest())
    }
  }, [roomUuid, dispatch])

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

  if (!roomState.data[0]) {
    return <div>loading</div>
  }
  return (
    <S.Container>
      <Header
        roomName={roomName}
        toggleSearchBar={toggleSearchBar}
        toggleDrawer={toggleDrawer}
      />
      <SearchAccordion
        open={isSearchOpen}
        toggleSearchBar={toggleSearchBar}
      />
      <ChatArea roomUuid={roomUuid} userUuid={uuid}/>
      <TextArea roomUuid={roomUuid} userUuid={uuid}/>
      <MenuDrawer
        handleLeaveRoom={handleLeaveRoom}
        isDrawerOpen={isDrawerOpen}
        roomState={roomState}
        toggleDrawer={toggleDrawer}
      />
    </S.Container>
  )
}

export default ChatRoom
