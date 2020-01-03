import React from 'react';
import * as S from './styles';

const Login: React.FC = () => (
    <S.Container>
      <S.Logo />
      <S.SigninButton>
        <S.Signin />
      </S.SigninButton>
    </S.Container>
);

export default Login;
