import React, {
  useEffect,
  useState,
} from 'react';
import * as S from 'components/GoogleSignin/styles';
import { GoogleLogin } from 'react-google-login';
import GoogleSigninImage from 'assets/google_signin.png';
import qs from 'qs';

const AUTHORIZE_URI =
  'https://accounts.google.com/o/oauth2/v2/auth';

const PEOPLE_URI =
  'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses';

const queryStr = qs.stringify(
  {
    client_id:
      '559423734767-eqosl4f6j9kc771u93ste9g78ecrgl6d.apps.googleusercontent.com',
    response_type: 'token',
    redirect_uri:
      window.location.href,
    scope:
      'https://www.googleapis.com/auth/userinfo.profile',
  },
);

const loginUrl =
  AUTHORIZE_URI +
  '?' +
  queryStr;
const GoogleSignin: React.FC = () => {
  // const [
  //   userInfo,
  //   setUserInfo,
  // ] = useState([]);
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
