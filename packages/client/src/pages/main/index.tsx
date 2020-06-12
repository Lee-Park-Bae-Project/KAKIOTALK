import React, {
  FC, useState,
} from 'react'
import * as S from 'pages/main/styles'
import NavigationBar from 'components/NavigationBar'
import { RoomState } from 'modules/room'
import { RootState } from 'modules'
import { Loader } from 'components'
import FriendContainer from 'containers/FriendContainer'
import Room from 'system/Room'
import { useSelector } from 'react-redux'

interface Props {
  roomState: RoomState
}

const Main: FC<Props> = ({ roomState }) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login)
  const [tabSelector, setTabSelector] = useState({
    friend: true,
    chat: false,
  })

  const friendTabOnClick = () => {
    setTabSelector({
      friend: true,
      chat: false,
    })
  }
  const chatTabOnClick = () => {
    setTabSelector({
      friend: false,
      chat: true,
    })
  }
  return (
    <S.Container>
      {isLoggedIn ? (
        <S.MainWrapper>
          {tabSelector.friend && <FriendContainer />}
          {tabSelector.chat && <Room roomState={roomState} />}
        </S.MainWrapper>
      ) : (
        <Loader/>
      )}
      <S.NavigationBarWrapper>
        <NavigationBar
          tabSelector={tabSelector}
          friendTabOnClick={friendTabOnClick}
          chatTabOnClick={chatTabOnClick}
        />
      </S.NavigationBarWrapper>

    </S.Container>
  )
}

export default Main
