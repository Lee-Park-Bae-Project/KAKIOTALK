import styled from 'styled-components'
import { color } from 'styles/global'

interface ContainerProps {
  open: boolean
}

export const Container = styled.div<ContainerProps>`
  /* display: ${(props) => !props.open && 'none'}; */
  z-index: ${(props) => !props.open && '-1'};
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

interface SectionProps {
  open: boolean
}
export const Section = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  background: ${color.LIGHT_GRAY};
  height: 100%;
  width: 70%;
  position: absolute;
  right: 0;
  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.open ? 'translateX(0%)' : 'translateX(100%)')} ;
`

export const Background = styled.div`
  position: absolute;
  background: ${color.BLACK};
  opacity: 0.3;
  width: 100%;
  height: 100%;
`

export const Button = styled.button`

`
