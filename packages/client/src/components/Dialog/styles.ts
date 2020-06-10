import styled from 'styled-components'
import Flex from 'atoms/Flex'
import {
  color, fontSize, weight,
} from 'styles/global'

export const Container = styled(Flex)`

`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled(Flex)`
  flex-direction: column;
  
  background-color: white;
  width: 20rem;
  padding: 2rem;
`

export const Title = styled.p`
  font-size: ${fontSize.LARGE};
  color: ${color.BLACK};
  font-weight: ${weight.STRONG};
  margin-right: auto;
`

export const Description = styled.p`
  font-size: ${fontSize.MEDIUM};
  color: ${color.BLACK};
  font-weight: ${weight.NORMAL};
  margin-right: auto;
`
