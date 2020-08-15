import styled from 'styled-components'
import { color } from 'styles/global'

interface ContainerProps {
  open: boolean
}
export const Container = styled.div<ContainerProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: ${(props) => (props.open ? '10' : '-1')}; */
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};

`

interface SectionProps {
  open: boolean
}
export const Section = styled.section<SectionProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: ${color.LIGHT_GRAY};
  height: 100%;
  width: 60%;
  right: 0;
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: ${(props) => (props.open ? 'translateX(0%)' : 'translateX(100%)')} ;
`

interface BackgroundProps {
  open: boolean
}
export const Background = styled.div<BackgroundProps>`
  position: fixed;
  background: ${(props) => (props.open ? color.BLACK : 'none')};
  transition: all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  opacity: 0.3;
  width: 100vh;
  height: 100vh;
`

export const Button = styled.button`

`
