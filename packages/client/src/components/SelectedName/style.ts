import styled from 'styled-components'
import { color } from 'styles/global'
import Flex from 'atoms/Flex'

export const Container = styled(Flex)`
  width: 6.5rem;
  height: 2rem;
  border: 1px solid;
  border-color: ${color.BLACK};
  border-radius: 10px;    
  padding: 0.4rem;
  margin: 0.1rem;
  align-content: flex-start;
  `

export const name = styled(Flex)`
  font-size: 1rem;
  font-color: ${color.BLACK};

`
