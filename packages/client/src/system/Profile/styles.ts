import styled from 'styled-components'
import Flex from 'atoms/Flex'
import {
  color, fontSize,
} from 'styles/global'

export const Container = styled.div`
  position: absolute;
  left: 5%;
  width: 300px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2c2c2c;
  box-shadow: 4px 4px 4px 0 #616161;
`

export const CloseButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 0.5rem;
`

export const ProfileWrapper = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`
export const NameWrapper = styled.div`
  font-size: ${fontSize.LARGE};
  line-height: 2.5rem;
  color: ${color.WHITE};
`

export const StatusWrapper = styled.div`
    font-size:${fontSize.SMALL};
    color:${color.WHITE}
    opacity:50%;
    line-height: 1.5rem;
    text-align:center;
    padding:1rem;

`

export const Footer = styled(Flex)`
  justify-content: center;
`
export const MessageWrapper = styled.span``

export const DeleteWrapper = styled.span``

interface Img {
  big: boolean
}
export const Image = styled.img`
  width: ${(props: Img) => (props.big ? '4.5rem' : '2.5rem')};
  height: ${(props: Img) => (props.big ? '4.5rem' : '2.5rem')};
  border-radius: 40%;
  cursor: pointer;
`
