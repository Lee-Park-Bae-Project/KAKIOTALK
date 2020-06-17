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

export const InputContainer = styled.div`
  display: flex;
`

export const Input = styled.textarea`
  width:100%;
  text-decoration: none;
  outline: none;
  height: 7rem;
  border:none;
  padding: 0.5rem 1rem;
  word-break: break-word;
  resize: none;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width:10rem;
  height: 100%;
  background-color:white;
  min-width: 5rem;
`

interface SendBtnProps {
  hasContent: boolean
}
export const SendBtn = styled.button<SendBtnProps>`
  outline:none;
  margin:auto;
  width: 5rem;
  height: 5rem;
  background: ${({ hasContent }) => (hasContent ? '#FFE503' : '#F9F9F9')};
  color: ${({ hasContent }) => (hasContent ? 'black' : '#B1B1B1')};
  border-radius: 5px;
  border: 1px solid #ECECEC;
  cursor: pointer;
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

export const Header = styled.div`
  display: flex;
  padding: 1rem;
  background: ${color.LIGHT_GRAY};
  justify-content: space-between;
`

export const Title = styled.span`
  position: absolute;
  line-height: 2rem;
  height: 2rem;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
`

export const Back = styled.div`
  cursor: pointer;
  height: 2rem;
`

export const ChatBottom = styled.div``
