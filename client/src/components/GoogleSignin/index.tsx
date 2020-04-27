import React from 'react';
import dotenv from 'dotenv';
import GoogleSigninImage from 'assets/google_signin.png';
import * as S from 'components/GoogleSignin/styles';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { loginRequest } from 'modules/login';
import { useCookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

const { useState, useEffect } = React;

dotenv.config();

// type LoginForm = {
//   loginSuccess: (state: { id: string; email: string; name: string }) => void;
// };
const clientGoogleId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const GoogleSignin: React.FC = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['name']);
  const [login, setLogin] = useState({
    email: '',
    name: '',
    googleId: ''
  });

  const history = useHistory();
  const responseSuccess = (e: any) => {
    setLogin({
      email: e.profileObj.email,
      name: e.profileObj.name,
      googleId: e.profileObj.googleId
    });
    dispatch(loginRequest(login));
    const { isLoggedIn } = useSelector((state: RootState) => state.login);
    if (isLoggedIn) {
      history.push('/main');
      e.profileObj.name;
    } else {
      alert('login Failure');
      console.log('logi Fail');
    }

    // axios
    //   .post(
    //     '/v1/dummy',
    //     qs.stringify({
    //       e: e.googleId,
    //       email: e.email,
    //       name: e.name,
    //       aceessToken: e.accessToken
    //     })
    //   )
    //   .then(response => {
    //     alert('login Success');
    //     console.log('response');
    //     history.push('/main');
    //   })
    //   .catch(error => {
    //     alert('login Failure');
    //     console.log('failed', error);
    //   });
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
