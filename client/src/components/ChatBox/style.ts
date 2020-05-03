import styled from 'styled-components'

const RightBox = styled.div`
text-align:right;
padding:0.7rem;
`
const LeftBox = styled.div`
text-align:left;
padding:0.7rem;
`
const Text = styled.textarea`
font-size:15px;
background-color:yellow;
padding:5px;
border-radius: 5px 5px / 5px 5px;
text-decoration: none;
outline: none;
border:none;
resize: none; /*remove the resize handle on the bottom right*/
`
const SendTime = styled.span`
font-size:10px;
padding: 0 1rem 0 1rem;
color:white;

`
export {LeftBox,RightBox,Text,SendTime}