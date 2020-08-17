import styled from 'styled-components'
import Flex from 'atoms/Flex'

interface IconSize{
  size: string | number;
}
export const Container = styled(Flex)``

export const Img = styled.img<IconSize>`
  border: none;
  width: ${(props) => props.size};
`
