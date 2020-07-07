import styled from 'styled-components'

export const Container = styled.div`
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
