import React, { FC } from 'react'
import styled from 'styled-components'
import Flex from 'atoms/Flex'

const S = { NameList: styled(Flex)`
  flex-wrap: wrap;
  align-content: flex-start; 
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  max-height:80vh;
  overflow:scroll;
  float:left;
  justify-content: flex-start;
  width: 100%;
  ` }

const SelectedList: FC = ({ children }) => (
  <S.NameList >
    {children}
  </S.NameList>
)
export default SelectedList
