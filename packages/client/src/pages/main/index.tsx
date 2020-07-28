import React, {
  FC, Fragment, useEffect,
} from 'react'
import * as S from 'pages/main/styles'
import {
  Loader, NavigationBar,
} from 'components'
import Room from 'system/Room'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { url } from 'common/constants'
import { getRoomRequest } from 'modules/room'
import { afterLogin } from 'modules/socket'
import Friend from 'pages/main/Friend'
import { useAuth } from 'hooks'

const Main: FC = () => {
  const dispatch = useDispatch()
  const {
    isLoggedIn, userInfo,
  } = useAuth()
  const { uuid } = userInfo
  useEffect(() => {
    dispatch(getRoomRequest())
    if (isLoggedIn) {
      dispatch(afterLogin({ uuid }))
    }
  }, [])
  window.history.pushState(null, '', window.location.href)
  return (
    <S.Container>
      <S.MainWrapper>
        {isLoggedIn ? (
          <Fragment>
            <Route path={url.main.friendList} component={Friend} />
            <Route path={url.main.chatList} component={Room} />
          </Fragment>
        ) : (
          <S.LoaderContainer>
            <Loader />
          </S.LoaderContainer>
        )}
      </S.MainWrapper>
      <S.NavigationBarWrapper>
        <NavigationBar />
      </S.NavigationBarWrapper>
    </S.Container>
  )
}

export default Main
