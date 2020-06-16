import React, { FC } from 'react'
import styled from 'styled-components'

const S = {
  Container: styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 142px;
  height: 40px;
  margin: -20px 0 0 -71px;
  background: white;
  filter: contrast(20);
  `,
  Dot1: styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  left: 15px;
  filter: blur(4px);
  background: #000;
  border-radius: 50%;
  transform: translateX(0);
  animation: dot 2.8s infinite;
  @keyframes dot{
    50%{
      transform: translateX(96px);
      
    }

  }
  `,
  Dots: styled.div`
  transform: translateX(0);
  margin-top: 12px;
  margin-left: 31px;
  animation: dots 2.8s infinite;
  @keyframes dots {
  50%{
    transform: translateX(-31px);
  }
}
  `,
  Dot2: styled.span`
  display: block;
  float: left;
  width: 16px;
  height: 16px;
  margin-left: 16px;
  filter: blur(4px);
  background: #000;
  border-radius: 50%;
  `,

}

const Loader: FC = () => (
      <S.Container>
        <S.Dot1/>
        <S.Dots>
          <S.Dot2/>
          <S.Dot2/>
          <S.Dot2/>
        </S.Dots>
      </S.Container>
)

export default Loader
