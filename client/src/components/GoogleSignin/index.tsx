import React from 'react';
import dotenv from 'dotenv';
import * as S from 'components/GoogleSignin/styles';
import GoogleLogin from 'react-google-login';
import { withRouter, useHistory } from 'react-router-dom';
import { configs } from 'common/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCookies } from 'react-cookie';
import request from 'common/request';
const { useState, useEffect } = React;

dotenv.config();

type LoginForm = {
  loginSuccess: (state: { id: string; email: string; name: string }) => void;
};
const clientGoogleId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const GoogleSignin: React.FC = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: '',
    name: '',
    googleId: '',
  });
  useEffect(() => {
    console.log(login);
  }, [login]);

  const history = useHistory();
  const responseSuccess = (e: any) => {
    const { googleId } = e;
    const googleAccessToken = e.accessToken;
    const { name, email } = e.profileObj;
    setLogin({
      email,
      name,
      googleId,
    });
    console.log(e);
    request
      .getLogin(googleId, email, name, googleAccessToken)
      .then(response => {
        history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };
  const responseFail = (err: Error) => {
    console.error(err);
  };

  return (
    <S.Container>
      <GoogleLogin
        clientId={configs.CLIENT_ID}
        buttonText="Google"
        onSuccess={responseSuccess}
        onFailure={responseFail}
        redirectUri="http://localhost:3000/login/"
        cookiePolicy={'single_host_origin'}
        prompt="consent"
      />
    </S.Container>
  );
};

export default withRouter(GoogleSignin);
