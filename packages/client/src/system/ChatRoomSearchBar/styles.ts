import styled from 'styled-components'

interface ActicleProps{
  open: boolean,
}
export const Container = styled.div<ActicleProps>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  width: 100%;
  transition: all 0.5s ease-in;
`

export const Wrapper = styled.div`
  display: flex;
  height: 1.5rem;
  margin: 0.5rem;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
`
