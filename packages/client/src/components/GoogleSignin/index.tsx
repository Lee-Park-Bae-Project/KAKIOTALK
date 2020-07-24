import React from 'react'
import * as S from 'components/GoogleSignin/styles'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { useHistory, withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { configs, url } from 'common/constants'
import * as request from 'common/request'
import { alert } from 'common/utils'
import { loginSuccess } from 'modules/login'
import { getProfile } from 'modules/profile'
import { getFriends } from 'modules/friends'
import { getRoomRequest } from 'modules/room'

const loginURL = configs.NODE_ENV_VAR === 'production' ? configs.LOGIN_URL_PRODUCT : configs.LOGIN_URL

const isResOffline = (res: any): res is GoogleLoginResponseOffline => res.code !== undefined

const GoogleSignin: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const responseSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if (isResOffline(res)) {
      console.warn('offline')
      return
    }
    const { googleId } = res
    const googleAccessToken = res.accessToken
    const {
      name, email, imageUrl,
    } = res.profileObj

    request
      .getLogin({
        googleId, email, name, googleAccessToken, imageUrl,
      })
      .then((response) => {
        dispatch(loginSuccess())
        dispatch(getProfile())
        dispatch(getFriends())
        dispatch(getRoomRequest())
        history.push(url.main.friendList)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const responseFail = (err: Error) => {
    alert.error(err.message)
  }

  const responseAutoLoad = (success: boolean) => {
    console.warn(success)
  }
  return (
    <S.Container>
      <GoogleLogin
        clientId={configs.CLIENT_ID}
        buttonText="Google"
        onSuccess={responseSuccess}
        onFailure={responseFail}
        onAutoLoadFinished={responseAutoLoad}
        redirectUri={loginURL}
        cookiePolicy={'single_host_origin'}
        prompt="consent"
      />
    </S.Container>
  )
}

export default withRouter(GoogleSignin)
