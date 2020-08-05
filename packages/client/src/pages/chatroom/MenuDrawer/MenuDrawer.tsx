import React from 'react'
import {
  Dialog, Drawer,
} from 'components'
import Icon from 'Icon/Icon'
import { List } from 'system'
import { RoomState } from 'modules/room'
import * as S from './styles'

const { useState } = React
interface Props{
  roomState: RoomState
  toggleDrawer: () => void
  isDrawerOpen: boolean
  handleLeaveRoom: () => void
}

const Menu: React.FC<Props> = ({
  roomState, toggleDrawer, isDrawerOpen, handleLeaveRoom,
}) => {
  const [isLeaveAlertOpen, setIsLeaveAlertOpen] = useState(false)
  const toggleLeaveAlert = () => {
    setIsLeaveAlertOpen(!isLeaveAlertOpen)
  }
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      >
        <Icon icon="ArrowRight" onClick={toggleDrawer}/>
        <List>
          {roomState.data[0].participants.map((v) => (
            <p key={v.uuid}>{v.name}</p>
          ))}
        </List>
        <S.Button onClick={toggleLeaveAlert}>나가기</S.Button>
      </Drawer>
      <Dialog
      isVisible={isLeaveAlertOpen}
      title={'나가기'}
      description={'나가시겠습니까?'}
      isHideButton={false}
      canCancel={true}
      confirmText="확인"
      cancelText="취소"
      onConfirm={handleLeaveRoom}
      onCancel={toggleLeaveAlert}
    />
  </>
  )
}

export default Menu
