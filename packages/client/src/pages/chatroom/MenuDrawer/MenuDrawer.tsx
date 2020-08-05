import React from 'react'
import {
  Dialog, Drawer, Loader,
  UserCard,
} from 'components'
import Icon from 'Icon/Icon'
import { List } from 'system'
import { RoomData } from 'modules/room'
import { RootState } from 'modules'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { getProfile } from 'modules/profile'
import * as S from './styles'

const {
  useState, useEffect,
} = React
interface Props{
  thisRoomState: RoomData
  toggleDrawer: () => void
  isDrawerOpen: boolean
  handleLeaveRoom: () => void
}

const Menu: React.FC<Props> = ({
  thisRoomState, toggleDrawer, isDrawerOpen, handleLeaveRoom,
}) => {
  const dispatch = useDispatch()
  const profile = useSelector((state: RootState) => state.profile)
  const [isLeaveAlertOpen, setIsLeaveAlertOpen] = useState(false)
  const toggleLeaveAlert = () => {
    setIsLeaveAlertOpen(!isLeaveAlertOpen)
  }
  useEffect(() => {
    dispatch(getProfile())
  }, [])
  if (!profile) return <Loader/>
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      >
        <S.Header>
          <Icon icon="ArrowRight" onClick={toggleDrawer}/>
        </S.Header>
        <List>
          {
            thisRoomState.participants.map((v) => {
              if (profile.uuid === v.uuid) return null
              return (
                <UserCard
                  key={v.uuid}
                  isMyProfile={false}
                  name={v.name}
                />
              )
            })
          }
        </List>

        <S.Bottom>
          <S.IconWrapper>
          <Icon icon="Exit" onClick={toggleLeaveAlert}/>
          </S.IconWrapper>
        </S.Bottom>
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
