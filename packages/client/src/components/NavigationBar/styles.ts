import styled from 'styled-components'
import Flex from 'atoms/Flex'
import { color } from 'styles/global'

export const Container = styled(Flex)`
  background-color: ${color.BROWN};
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  height: 3.7rem;
  left: 1rem;
  right: 1rem;
`

export const ItemWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  height: 3.7rem;
  width: 100%;
  left: 1rem;
  right: 1rem;  
`
