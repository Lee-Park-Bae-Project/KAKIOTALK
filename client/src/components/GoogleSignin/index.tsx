import React, {
  useEffect,
  useState,
} from 'react';
import * as S from 'components/GoogleSignin/styles';
import GoogleSigninImage from 'assets/google_signin.png';
import qs from 'qs';
import dotenv from 'dotenv';
dotenv.config();

const queryStr = qs.stringify(
  {
    client_id:
      process.env
        .REACT_APP_CLIENT_ID,
    response_type: 'token',
    redirect_uri:
      window.location.href,
    scope:
      'https://www.googleapis.com/auth/userinfo.profile',
  },
);

const loginUrl =
  process.env
    .REACT_APP_AUTHORIZE_URI +
  '?' +
  queryStr;
const GoogleSignin: React.FC = () => {
  const googleLogin = () => {
    window.location.assign(
      loginUrl,
    );
  };
  return (
    <S.Container>
      <button
        id="googleSignInButton"
        onClick={googleLogin}
      >
        <S.Img
          src={
            GoogleSigninImage
          }
          alt="google signin"
        />
      </button>
    </S.Container>
  );
};

export default GoogleSignin;
