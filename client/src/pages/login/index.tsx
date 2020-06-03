import React from 'react';
import * as S from 'pages/login/styles';

const Login: React.FC = () => (
  <S.Container>
    <S.Logo />
    <S.SigninButton>
      <S.Signin />
    </S.SigninButton>
  </S.Container>
);

export default Login;
