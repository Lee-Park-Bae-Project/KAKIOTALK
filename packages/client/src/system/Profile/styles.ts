import styled from 'styled-components'
import Flex from 'atoms/Flex'
import {
  color, fontSize,
} from 'styles/global'

interface ContainerProps {
  isOverflow: boolean
  slideMount: number
}
export const Container = styled.div`
  display: flex;
  position: absolute;
  left: 5rem;
  top: ${(props: ContainerProps) => (props.isOverflow ? '0' : 'auto')};
  bottom: 1rem;
  width: 300px;
  height: 570px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2c2c2c;
  box-shadow: 4px 4px 4px 0 #616161;
  z-index: 1;

  @media (max-width: 500px) {
    position: fixed;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    animation: 0.3s ease 0s 1 slideUp;
    transform: translateY(${(props: ContainerProps) => props.slideMount}%);
    transition-duration: 0.5s;
  }

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
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
  padding: 0 1rem;
`
export const NameWrapper = styled.div`
  font-size: ${fontSize.LARGE};
  line-height: 2.5rem;
  color: ${color.WHITE};
`

export const StatusWrapper = styled.div`
    font-size:${fontSize.SMALL};
    color:${color.WHITE}
    opacity:80%;
    line-height: 1.5rem;
    text-align:center;
    
`

export const Footer = styled(Flex)`
  justify-content: center;
`
export const ButtonWrapper = styled.div`
  margin: 0 1rem;
`

interface ImageCSS {
  big: boolean
}
export const Image = styled.img`
  width: ${(props: ImageCSS) => (props.big ? '4.5rem' : '2.5rem')};
  height: ${(props: ImageCSS) => (props.big ? '4.5rem' : '2.5rem')};
  border-radius: 40%;
  cursor: pointer;
`

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;
`
export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 1rem;
  border: none;
  outline: none;
`
interface LabelProps {
  isEmpty?: boolean
}
export const Label = styled.label`
color:${(props: LabelProps) => (props.isEmpty ? '#FF0000' : color.WHITE)}
font-size:10px;
`
