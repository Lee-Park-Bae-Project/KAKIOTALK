import styled from 'styled-components'
import Flex from 'atoms/Flex'
import { color } from 'styles/global'

export const Container = styled(Flex)`
  height: 5rem;
  justify-content: flex-start;
  padding: 0 1rem;
  background-color: ${color.WHITE};
  &:hover {
    background-color: ${color.HOVER_GRAY};
  }
`

export const ProfileWrapper = styled(Flex)`
  justify-content: flex-start;
`

export const Tri = styled.div`
  position:relative;
  width: 0px;
  height: 0px;
  border-top: 15px solid transparent;
  border-right: 30px solid gray;
  border-bottom: 15px solid transparent;

  @media (max-width: 500px ) {
    display:none;
  }
`
export const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;

`
