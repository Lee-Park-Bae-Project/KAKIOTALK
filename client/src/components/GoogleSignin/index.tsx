import React, {
  useEffect,
  useState,
} from 'react';

import GoogleSigninImage from 'assets/google_signin.png';
import * as S from 'components/GoogleSignin/styles';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
type LoginForm = {
  loginSuccess: (state: {
    id: string;
    email: string;
    name: string;
  }) => void;
};

const GoogleSignin: React.FC = () => {
  const [
    state,
    setState,
  ] = useState({
    id: '',
    email: '',
    name: '',
  });
  const responseSuccess = (
    e: any,
  ) => {
    setState({
      id: e.googleId,
      email: e.email,
      name: e.name,
    });
    axios
      .post('/login', {
        params: {
          email: state.email,
          id: state.id,
        },
      })
      .then(response => {
        console.log(
          'response',
        );
      })
      .catch(error => {
        console.log(
          'failed',
          error,
        );
      });
  };
  const responseFail = (
    err: Error,
  ) => {
    console.error(err);
  };

  return (
    <S.Container>
      <h2>{state.id}</h2>
      <GoogleLogin
        clientId="559423734767-eqosl4f6j9kc771u93ste9g78ecrgl6d.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={
          responseSuccess
        }
        onFailure={
          responseFail
        }
        cookiePolicy={
          'single_host_origin'
        }
      />
      {/* <S.Img
          src={
            GoogleSigninImage
          }
          alt="google signin"
        />
      </button> */}
    </S.Container>
  );
};

export default GoogleSignin;
