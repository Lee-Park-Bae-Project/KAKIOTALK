import React from 'react'
import dotenv from 'dotenv'
import * as S from 'components/GoogleSignin/styles'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'
import {
  useHistory, withRouter,
} from 'react-router-dom'
import { configs } from 'common/constants'
import {
  useDispatch, useSelector,
} from 'react-redux'
import * as request from 'common/request'

const {
  useState, useEffect,
} = React

type LoginForm = {
  loginSuccess: (state: { id: string; email: string; name: string }) => void;
};
const GoogleSignin: React.FC = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState({
    email: '',
    name: '',
    googleId: '',
  })

  const history = useHistory()
  const responseSuccess = (e: GoogleLoginResponse) => {
    const { googleId } = e
    const googleAccessToken = e.accessToken
    const {
      name, email,
    } = e.profileObj
    setLogin({
      email,
      name,
      googleId,
    })
    request
      .getLogin({
        googleId, email, name, googleAccessToken,
      })
      .then((response) => {
        history.push('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const responseFail = (err: Error) => {
    console.error(err)
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
