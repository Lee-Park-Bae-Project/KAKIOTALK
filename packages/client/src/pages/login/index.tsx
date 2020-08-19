import React from 'react'
import * as S from 'pages/login/styles'
import { LoginGoogle } from 'components'

const Login: React.FC = () => (
  <S.Container>
    <S.LoginContainer>
      <S.H1>Welcome!</S.H1>
      <S.H4>카키오톡에서 친구들과 자유롭게 대화를 시작해보세요!</S.H4>
      <S.LoginWrapper>
        <LoginGoogle/>
      </S.LoginWrapper>
    </S.LoginContainer>
  </S.Container>
)

export default Login
