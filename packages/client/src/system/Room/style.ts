import styled from 'styled-components'
import { color } from 'styles/global'

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
