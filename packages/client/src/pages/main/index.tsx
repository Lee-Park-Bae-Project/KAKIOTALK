import React, { FC } from 'react'
import * as S from 'pages/main/styles'
import NavigationBar from 'components/NavigationBar'
import { RootState } from 'modules'
import { Loader } from 'components'
import FriendContainer from 'containers/FriendContainer'
import ChatRoomStartContainer from 'containers/ChatRoomStartContainer'
import Room from 'system/Room'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'

const Main: FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login)

  return (
    <S.Container>
      {isLoggedIn ? (
        <S.MainWrapper>
          <Route path='/main/friend-list' component={FriendContainer}/>
          <Route path='/main/chat-list' component={Room}/>
          <Route path='/main/make-chat' component={ChatRoomStartContainer}/>
        </S.MainWrapper>
      ) : (
        <Loader/>
      )}
      <S.NavigationBarWrapper>
        <NavigationBar/>
      </S.NavigationBarWrapper>

    </S.Container>
  )
}

export default Main
