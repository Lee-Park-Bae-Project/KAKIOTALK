import Styled from 'styled-components'

export const PopUp = Styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
background-color: rgba(0,0,0, 0.5);
`

export const PopUpInner = Styled.div`
position: absolute;
left: 50%;
right: 50%;
top: 30%;
bottom: 30%;
margin: auto;
`
