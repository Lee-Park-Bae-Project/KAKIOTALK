import styled from 'styled-components'
import Flex from 'atoms/Flex'
import {
  color, fontSize, weight,
} from 'styles/global'

export const Container = styled(Flex)`
  z-index: 9999;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60rem;
`

export const Content = styled(Flex)`
  flex-direction: column;
  border-radius:1rem;
  background-color: white;
  width: 20rem;
  max-height: 40rem;
  height: fit-content;
  padding: 2rem;

  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`

export const Title = styled.p`
  font-size: ${fontSize.LARGE};
  color: ${color.BLACK};
  font-weight: ${weight.STRONG};
  margin-right: auto;
  padding:1rem;
`

export const Description = styled.p`
  font-size: ${fontSize.MEDIUM};
  color: ${color.BLACK};
  font-weight: ${weight.NORMAL};
  margin-right: auto;
`
