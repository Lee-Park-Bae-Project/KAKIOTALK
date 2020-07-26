import React, { FC } from 'react'
import styled from 'styled-components'

const S = { Loader: styled.div`
  margin: 1rem auto;
  border: 0.5rem solid rgba(255,255,255,1);
  border-radius: 50%;
  border-top: 0.5rem solid #F7CF46;
  width: 5rem;
  height: 5rem;
  -webkit-animation: spin 0.9s  infinite; /* Safari */
  animation: spin 0.9s  infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ` }

const Loader: FC = () => (
      <S.Loader/>
)

export default Loader
