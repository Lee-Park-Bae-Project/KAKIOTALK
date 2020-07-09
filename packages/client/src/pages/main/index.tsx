import React, {
  FC, useEffect,
} from 'react'
import * as S from 'pages/main/styles'
import NavigationBar from 'components/NavigationBar'
import Room from 'system/Room'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { url } from 'common/constants'
import { getRoomRequest } from 'modules/room'
import { afterLogin } from 'socket'
import Friend from 'pages/main/Friend'
import { getUserInfo } from 'common/request'
import { useAuth } from 'hooks'

const Main: FC = () => {
  const dispatch = useDispatch()
  useAuth()
  useEffect(() => {
    dispatch(getRoomRequest())
    getUserInfo().then((response) => {
      const { uuid } = response.data.data
      afterLogin({ uuid })
    })
  }, [])
  window.history.pushState(null, '', window.location.href)
  return (
    <S.Container>
        <S.MainWrapper>
          <Route path={url.main.friendList} component={Friend}/>
          <Route path={url.main.chatList}component={Room}/>
        </S.MainWrapper>
      <S.NavigationBarWrapper>
        <NavigationBar/>
      </S.NavigationBarWrapper>

    </S.Container>
  )
}

export default Main
