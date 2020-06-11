import React from 'react'
import dotenv from 'dotenv'
import * as S from 'components/GoogleSignin/styles'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'
import {
  useHistory, withRouter,
} from 'react-router-dom'
import { configs } from 'common/constants'
import * as request from 'common/request'
import { alert } from 'common/utils'

const loginURL = configs.NODE_ENV_VAR === 'production' ? configs.LOGIN_URL_PRODUCT : configs.LOGIN_URL

const GoogleSignin: React.FC = () => {
  const history = useHistory()
  const responseSuccess = (res: any) => {
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
        redirectUri={loginURL}
        cookiePolicy={'single_host_origin'}
        prompt="consent"
      />
    </S.Container>
  )
}

export default withRouter(GoogleSignin)
