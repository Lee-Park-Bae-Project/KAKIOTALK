import styled from 'styled-components'
import Flex from 'atoms/Flex'

export const Container = styled.div`
  width:100%;
  height:100%;
  min-height:100vh;
`

export const MainWrapper = styled.div`
position:absolute;
top:10%;
left:3rem;
right:0;
height:90%;
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
export const LoaderContainer = styled(Flex)`
min-height:100vh;
`

