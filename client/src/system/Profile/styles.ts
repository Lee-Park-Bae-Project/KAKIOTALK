import styled from 'styled-components';
import Flex from 'atoms/Flex';
import { color, fontSize } from 'styles/global';

export const Container = styled(Flex)`
  width: 100%;
  height: 20rem;
  flex-direction: column;
  background-color: ${color.WHITE};
  align-items: center;
  padding:1rem;
  box-shadow : 5px 5px 5px 5px ;
`;

export const NameWrapper = styled.span`
  font-size: ${fontSize.LARGE};
  line-height: 2.5rem;

`;

export const StatusWrapper = styled.p`
    font-size:${fontSize.SMALL}
    opacity:50%
    margin: 0 0 1rem 0;
    line-height: 1.5rem;
    text-align:center;

`;

export const Footer = styled(Flex)`
  justify-content: space-evenly;
`;
export const MessageWrapper = styled.span`

`;

export const DeleteWrapper = styled.span`

`;

export const PopUp = styled.div`
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

export const PopUpInner = styled.div`
position: absolute;
left: 25%;
right: 25%;
top: 25%;
bottom: 25%;
margin: auto;
`