import React from 'react'
import styled from 'styled-components'

const S = { Container: styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
  ` }

const NoChatRoom = () => (
    <S.Container>
      <p>아직 대화방이 없어요</p>
    </S.Container>
)
export default NoChatRoom
