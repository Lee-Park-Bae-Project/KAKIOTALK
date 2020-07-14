import styled from 'styled-components'
import { color } from 'styles/global'
import Flex from 'atoms/Flex'

export const Header = styled.div`
position: fixed;
left: 3rem;
top: 0;
right: 0;
padding: 1rem;
background: ${color.WHITE};
`

export const InputWrapper = styled.div`
display:flex;
justify-content:flex-start;
padding:0.3rem;
background: #F6F6F6;
border : 2px solid ${color.GRAY}
border-radius: 2rem;

`
export const Container = styled.div`
width:100%;
height:100%;
`
export const LoaderContainer = styled(Flex)`
height :100%;
flex-direction:column;
justify-content:center;
`
