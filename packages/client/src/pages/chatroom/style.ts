import styled from 'styled-components'
import { color } from 'styles/global'

export const Container = styled.div`
  height:100%;
  /* background : ${color.ROOM_COLOR}; */
  display:flex;
  flex-direction:column;
  height: 100vh;
`

export const ChatContainer = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  background : ${color.ROOM_COLOR};
  overflow-y: auto;
`

export const ChatBox = styled.div`
  width: fit-content;
  background: ${color.WHITE};
  max-width: 70%;
  overflow-wrap: break-word;
  border-radius: 5px;
  margin: 1rem;
  padding: 0.5rem;
`

export const ChatBottom = styled.div``
