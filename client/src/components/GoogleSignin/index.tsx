import React, {
  useEffect,
  useState,
} from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import * as S from 'components/GoogleSignin/styles';
import GoogleLogin from 'react-google-login';
import request from 'common/request';
import { configs } from 'common/constants';

const GoogleSignin: React.FC<RouteComponentProps> = ({ match, location }) => {
  const [state, setState] = useState({
    id: '',
    email: '',
    name: '',
  });

  useEffect(() => {
    console.log(state);
  }, [state]);
  const responseSuccess = (e: any) => {
    const { googleId } = e;
    const googleAccessToken = e.accessToken;
    const { name, email } = e.profileObj;
    setState({
      id: googleId,
      email,
      name,
    });


    request.login(googleId,
      email,
      name,
      googleAccessToken)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
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
        clientId={configs.CLIENT_ID}
        buttonText="Google"
        onSuccess={
          responseSuccess
        }
        onFailure={
          responseFail
        }
        redirectUri="http://localhost:3000/login/"
        cookiePolicy={
          'single_host_origin'
        }
      />
    </S.Container>
  );
};

export default withRouter(GoogleSignin);
