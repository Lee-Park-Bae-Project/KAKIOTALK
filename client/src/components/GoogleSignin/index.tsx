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
  const { isLoggedIn } = useSelector((state: RootState) => state.login);

  const history = useHistory();
  const responseSuccess = (e: any) => {
    dispatch(
      loginRequest({
        email: e.profileObj.email,
        name: e.profileObj.name,
        googleId: e.profileObj.googleId
      })
    );

    history.push('/main');
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
