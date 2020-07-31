import React, { useEffect } from 'react'
import * as S from 'components/GoogleSignin/styles'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { useHistory, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { configs, url } from 'common/constants'
import { alert } from 'common/utils'
import { loginRequest } from 'modules/login'
import { RootState } from 'modules'

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
    dispatch(loginRequest({
      googleId, email, name, googleAccessToken, imageUrl,
    }))
  }
  const responseFail = (err: Error) => {
    alert.error(err.message)
  }
  const responseAutoLoad = (success: boolean) => {
    console.warn(success)
  }
  const { isLoggedIn } = useSelector((state: RootState) => state.login)
  useEffect(() => {
    if (isLoggedIn) {
      history.push(url.main.friendList)
    }
  }, [isLoggedIn])

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
