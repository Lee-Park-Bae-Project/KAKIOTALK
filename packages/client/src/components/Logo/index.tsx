import React from 'react'
import LogoImage from 'assets/logo.png'
import * as S from 'components/Logo/styles'

export type LogoType = {
  size?: string | number;
};

const Logo = ({ size = '10rem' }: LogoType) => (
  <S.Container>
    <S.Img
      size={size}
      src={LogoImage}
      alt="Logo"
    />
  </S.Container>
)

export default Logo
