import styled from 'styled-components'
import { color } from 'styles/global'
import Flex from 'atoms/Flex'

export const Header = styled.section`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  background: ${color.HOVER_GRAY};
`
export const Bottom = styled.section`
  width: 100%;
  height: 8rem;
  padding: 0.5rem 1rem;
  background: ${color.HOVER_GRAY};
`

export const IconWrapper = styled.span`
  display: flex;
  margin-right: auto;
`
export const Container = styled(Flex)`
height: 5rem;
justify-content: flex-start;
padding: 0 1rem;
background-color: ${color.WHITE};
&:hover {
  background-color: ${color.HOVER_GRAY};
}`

