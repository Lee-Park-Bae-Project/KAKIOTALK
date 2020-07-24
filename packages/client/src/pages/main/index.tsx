import React, {
  FC, Fragment, useEffect,
} from 'react'
import * as S from 'pages/main/styles'
import { Loader, NavigationBar } from 'components'
import Room from 'system/Room'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { url } from 'common/constants'
import { getRoomRequest } from 'modules/room'
import { afterLogin } from 'socket'
import Friend from 'pages/main/Friend'
import { useAuth } from 'hooks'
import { RootState } from 'modules'

const Main: FC = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useAuth()
  const { uuid } = useSelector((state: RootState) => state.profile)
  useEffect(() => {
    afterLogin({ uuid })
  }, [])
  window.history.pushState(null, '', window.location.href)
  return (
    <S.Container>
      {isLoggedIn ? (
        <Fragment>
          <S.MainWrapper>
            <Fragment>
              <Route path={url.main.friendList} component={Friend} />
              <Route path={url.main.chatList} component={Room} />
            </Fragment>
          </S.MainWrapper>
          <S.NavigationBarWrapper>
            <NavigationBar />
          </S.NavigationBarWrapper>
        </Fragment>
      ) : (
        <S.LoaderContainer>
          <Loader />
        </S.LoaderContainer>
      )}
    </S.Container>
  )
}

export default Main
