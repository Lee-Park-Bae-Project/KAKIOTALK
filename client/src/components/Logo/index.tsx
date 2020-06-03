import React from 'react';
import LogoImage from 'assets/logo.png';
import * as S from 'components/Logo/styles';

const Logo: React.FC = () => (
  <S.Container>
    <S.Img
      src={LogoImage}
      alt="Logo"
    />
  </S.Container>
);

export default Logo;
