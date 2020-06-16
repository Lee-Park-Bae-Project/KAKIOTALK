import React, { FC } from 'react'
import * as S from 'pages/main/styles'
import NavigationBar from 'components/NavigationBar'
import { RootState } from 'modules'
import { Loader } from 'components'
import FriendContainer from 'containers/FriendContainer'
import Room from 'system/Room'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { url } from 'common/constants'


const Main: FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login)

  return (
    <S.Container>
      {isLoggedIn ? (
        <S.MainWrapper>
          <Route path={`${url.main}/friend-list`} component={FriendContainer}/>
          <Route path={`${url.main}/chat-list`} component={Room}/>
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
