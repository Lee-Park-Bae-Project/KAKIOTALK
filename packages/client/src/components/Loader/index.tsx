import React, { FC } from 'react'
import styled from 'styled-components'

const S = { Loader: styled.div`
  margin: 1rem auto;
  border: 0.5rem solid #f3f3f3;
  border-radius: 50%;
  border-top: 0.5rem solid #F7CF46;
  width: 5rem;
  height: 5rem;
  -webkit-animation: spin 1s  infinite; /* Safari */
  animation: spin 1s  infinite;

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
