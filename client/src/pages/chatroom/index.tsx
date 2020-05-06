import React, {
  FC, useState, useEffect, InputHTMLAttributes,
} from 'react';
import { sendMsg } from 'socket';
import { RouteComponentProps } from 'react-router-dom';
import * as S from './style';
import withAuth, { WithAuthProps } from '../../hocs/withAuth';

interface Chat {
  uuid: string;
  roomId: string;
  sender: string;
  content: string;
  createdAt: string;
}

const ChatRoom: FC<WithAuthProps & RouteComponentProps> = ({
  name, email, uuid, location,
}) => {
  const [messages, setMessages] = useState<Chat[]>([
    {
      uuid: '',
      roomId: '',
      sender: '',
      content: '',
      createdAt: '',
    },
  ]);

  useEffect(() => {
    console.log(uuid);
  }, [uuid]);

  let inputRef: any;
  const handleSubmit = () => {
    const date = new Date();
    setMessages(
      messages.concat([
        {
          uuid: '123',
          roomId: '123',
          sender: '123',
          content: inputRef.value,
          createdAt: date.toUTCString(),
        },
      ]),
    );
    sendMsg({
      sender: 'sender',
      content: 'content',
      roomId: 'typo',
      createdAt: date.toUTCString(),
    });

    inputRef.value = '';
  };
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.target && e.currentTarget.value.trim().length > 0) {
        handleSubmit();
        inputRef.scrollIntoView();
      }
    }
  };
  const { id, userName } = location.state;
  const chatLogs = messages.map((msg) => (
    <S.ChatBox
      sendTime={msg.createdAt}
      text={msg.content}
      received={false}
      key={msg.createdAt}
    />
  ));

  return (
    <S.Room>
      <S.UserCard userName={userName} />
      <S.ChatContainer>{chatLogs}</S.ChatContainer>
      <S.InputContainer>
        <S.InputArea
          ref={(el) => (inputRef = el)}
          onKeyPress={handleEnterPress}
        />
        <S.ButtonWrapper>
          <S.SendBtn onClick={handleSubmit}>전송</S.SendBtn>
        </S.ButtonWrapper>
      </S.InputContainer>
    </S.Room>
  );
};

export default withAuth(ChatRoom);
