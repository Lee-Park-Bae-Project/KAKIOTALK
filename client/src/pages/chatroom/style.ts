import styled from 'styled-components';
import UserCard from 'components/UserCard';
import { color } from 'styles/global';

const Container = styled.div`
  height:100%;
  /* background : ${color.ROOM_COLOR}; */
  display:flex;
  flex-direction:column;
  height: 100vh;
`;

const ChatContainer = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  background : ${color.ROOM_COLOR};
  overflow-y: auto;
`;

const InputContainer = styled.div`
  display:flex;
  margin-top:auto;
`;

const InputArea = styled.input`
  width:90%;
  text-decoration: none;
  outline: none;
  height: 7rem;
  border:none;
`;
const ButtonWrapper = styled.div`
  width:10%;
  display:flex;
  background-color:white;
  min-width: 5rem;
`;
const SendBtn = styled.button`
  outline:none;
  margin:auto;
  width: 5rem;
  height: 5rem;
  background: #F9F9F9;
  color: #B1B1B1;
  border-radius: 5px;
  border: 1px solid #ECECEC;
`;

export const ChatBox = styled.div`
  width: fit-content;
  background: ${color.WHITE};
  max-width: 70%;
  overflow-wrap: break-word;
  border-radius: 5px;
  margin: 1rem;
  padding: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  padding: 1rem;
  background: ${color.LIGHT_GRAY}
`;

export const Title = styled.div`
  position: absolute;
  margin: auto;
  left: 50%;
`;

export const Back = styled.div`

`;

export {
  Container,
  UserCard,
  ChatContainer,
  InputContainer,
  InputArea,
  ButtonWrapper,
  SendBtn,
};
