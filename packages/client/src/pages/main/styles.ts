import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  height:100%;
`
interface MainProps {
  isPoppedUp: boolean
}
export const MainWrapper = styled.div`
position:absolute;
top:4rem;
left:3rem;
right:0;
${(props: MainProps) => (props.isPoppedUp ? 'filter: blur(4px);' : '')}
${(props: MainProps) => (props.isPoppedUp ? 'overscroll-behavior: contain;' : '')}
`

export const NavigationBarWrapper = styled.div`
position:fixed;
left:0%;
height: 100%;
width: auto;
`

export const Header = styled.div`
position:fixed;
left:3rem;
top:0;
`
