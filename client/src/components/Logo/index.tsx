import React from 'react';
import * as S from './styles';
import LogoImage from '../../assets/logo.png';

const Logo: React.FC = () => (
  <S.Container>
    <S.Img
      src={LogoImage}
      alt="Logo"
    />
  </S.Container>
);

export default Logo;
