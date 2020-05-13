import styled from 'styled-components';
import UserCard from 'components/UserCard';
import ChatBox from 'components/ChatBox';
import { color } from 'styles/global';

const Room = styled.div`
height:100%;
background : ${color.ROOM_COLOR};
display:flex;
flex-direction:column;
`;

const ChatContainer = styled.div`
flex:1;
display:flex;
flex-direction:column;
background : ${color.ROOM_COLOR};
`;

const InputContainer = styled.div`
display:flex;
margin-top:auto;
`;

const InputArea = styled.input`
width:90%;
text-decoration: none;
outline: none;
height: 5rem;
border:none;
`;
const ButtonWrapper = styled.div`
width:10%;
display:flex;
background-color:white;
`;
const SendBtn = styled.button`
outline:none;
margin:auto;
`;

export {
  Room,
  UserCard,
  ChatContainer,
  InputContainer,
  InputArea,
  ButtonWrapper,
  SendBtn,
  ChatBox,
};
