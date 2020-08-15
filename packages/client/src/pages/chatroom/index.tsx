import React, { FC } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { ChatRoomSearchBar as SearchAccordion } from 'system'
import { getChatRequest } from 'modules/chat'
import {
  getRoomRequest, leaveRoomRequest,
  RoomData,
} from 'modules/room'

import { useAuth } from 'hooks'
import {
  useDispatch, useSelector,
} from 'react-redux'
import {
  Dialog, Drawer,
  Loader,
} from 'components'
import Icon from 'Icon/Icon'
import { RootState } from 'modules'
import { APIs } from '@kakio/common'
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
  const [thisRoomState, setThisRoomState] = useState<RoomData | undefined>(undefined)

  const toggleSearchBar = useCallback(() => {
    setIsSearchOpen(!isSearchOpen)
  }, [isSearchOpen, setIsSearchOpen])

  const handleLeaveRoom = () => {
    dispatch(leaveRoomRequest({
      roomUuid,
      userUuid: uuid,
    }))
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
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
    setRoomUuid(params.roomUuid)
  }, [params])

  useEffect(() => {
    if (roomUuid.length) {
      dispatch(joinRooms({ roomUuids: [roomUuid] }))
      dispatch(getRoomRequest())
    }
  }, [roomUuid, dispatch])

  useEffect(() => {
    setThisRoomState(roomState.data.find((v) => v.uuid === params.roomUuid))
  }, [roomState, roomUuid])

  useEffect(() => {
    if (!thisRoomState) return
    setRoomName(thisRoomState.participants
      .filter((v) => v.uuid !== uuid)
      .map((v) => v.name)
      .join(', '))
  }, [thisRoomState])

  if (!thisRoomState) {
    return <Loader/>
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
        thisRoomState={thisRoomState}
        toggleDrawer={toggleDrawer}
      />
    </S.Container>
  )
}

export default ChatRoom
