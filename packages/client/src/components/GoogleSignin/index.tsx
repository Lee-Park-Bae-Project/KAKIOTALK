import React from 'react'
import dotenv from 'dotenv'
import * as S from 'components/GoogleSignin/styles'
import GoogleLogin, {
  GoogleLoginResponse, GoogleLoginResponseOffline,
} from 'react-google-login'
import {
  useHistory, withRouter,
} from 'react-router-dom'
import { configs } from 'common/constants'
import * as request from 'common/request'
import { alert } from 'common/utils'

dotenv.config()

const isResOffline = (res: GoogleLoginResponse | GoogleLoginResponseOffline): res is GoogleLoginResponseOffline => res.code !== undefined

const GoogleSignin: React.FC = () => {
  const history = useHistory()
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
        history.push('/')
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
        redirectUri={configs.LOGIN_URL}
        cookiePolicy={'single_host_origin'}
        prompt="consent"
      />
    </S.Container>
  )
}

export default withRouter(GoogleSignin)
