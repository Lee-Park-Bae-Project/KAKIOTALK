import React from 'react';
import dotenv from 'dotenv';
import * as S from 'components/GoogleSignin/styles';
import GoogleLogin from 'react-google-login';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { loginRequest } from 'modules/login';
import { useCookies } from 'react-cookie';

const { useState, useEffect } = React;

dotenv.config();

type LoginForm = {
  loginSuccess: (state: { id: string; email: string; name: string }) => void;
};
const clientGoogleId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const GoogleSignin: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.login);

  const [login, setLogin] = useState({
    email: '',
    name: '',
    googleId: ''
  });
  useEffect(() => {
    console.log(login);
  }, [login]);

  const history = useHistory();
  const responseSuccess = (e: any) => {
    const { email, name, googleId } = e.profileObj;
    const { googleAccessToken } = e.accessToken;
    setLogin({
      email,
      name,
      googleId
    });
    dispatch(loginRequest({ email: email, name: name, googleId: googleId }));
    if (isLoggedIn) {
      history.push('/main');
    } else {
      console.log('login error');
      alert('login failure');
    }
  };

  const responseFail = (err: Error) => {
    console.error(err);
  };

  return (
    <S.Container>
      <GoogleLogin
        clientId={clientGoogleId}
        buttonText="Google"
        onSuccess={responseSuccess}
        onFailure={responseFail}
        cookiePolicy={'single_host_origin'}
      />
    </S.Container>
  );
};

export default GoogleSignin;
