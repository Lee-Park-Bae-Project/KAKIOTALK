import React from 'react';
import * as S from './styles';
import GoogleSigninImage from '../../assets/google_signin.png';

const GoogleSignin: React.FC = () => (
    <S.Container>
      <S.Img
        src={
          GoogleSigninImage
        }
        alt="google signin"
      />
    </S.Container>
);

export default GoogleSignin;
