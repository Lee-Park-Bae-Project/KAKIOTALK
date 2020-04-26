import React from 'react';
import * as S from 'pages/login/styles';
import { RouteComponentProps, useHistory } from 'react-router-dom';
interface Props extends RouteComponentProps {}

const Login: React.FC<RouteComponentProps> = () => (
  <S.Container>
    <S.Logo />
    <S.SigninButton>
      <S.Signin />
    </S.SigninButton>
  </S.Container>
);

export default Login;
