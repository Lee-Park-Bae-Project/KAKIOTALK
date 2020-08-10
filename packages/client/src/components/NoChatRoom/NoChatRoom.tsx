import React from 'react'
import styled from 'styled-components'

const S = { Container: styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
  ` }

const NoChatRoom = () => (
    <S.Container>
      <p>채팅 아이콘을 클릭해 친구들과 대화해보세요^_^</p>
    </S.Container>
)
export default NoChatRoom
