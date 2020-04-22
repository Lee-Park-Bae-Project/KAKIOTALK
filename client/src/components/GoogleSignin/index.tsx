import React, {
  useEffect,
  useState,
} from 'react';

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
    state, setState,
  ] = useState({
    id: '',
    email: '',
    name: '',
  });

  useEffect(() => {
    console.log(state);
  }, [state]);
  const responseSuccess = (e: any) => {
    console.log(e);
    setState({
      id: e.googleId,
      email: e.email,
      name: e.name,
    });

    axios.post('http://localhost:3050/v1/login/test', {
      googleId: e.googleId,
      accessToken: e.accessToken,
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
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
