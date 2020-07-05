import styled from 'styled-components'
import { color } from 'styles/global'
import Flex from 'atoms/Flex'

export const Container = styled(Flex)`
  display: flex;
  width: 6.5rem;
  height: 2rem;
  border: 1.5px solid;
  border-color: ${color.GRAY};
  border-radius: 10px;    
  padding: 0.4rem;
  margin: 0.1rem;
  align-content: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
  `

export const name = styled(Flex)` 
  display: flex;
  font-size: 1rem;
  font-color: ${color.BLACK};
  flex-wrap: nowrap;

`
