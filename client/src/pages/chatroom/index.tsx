import React, { FC, useState, useEffect } from 'react';
import * as S from './style';

const ChatRoom: FC = (props: any) => {
  console.log('chatRoom rendered');
  const [messages, setMessages] = useState([
    {
      writerId: '',
      writerName: 'beomjoon',
      writerEmail: '',
      writerUuid: '',
      sendTime: new Date(),
      text: 'sample message',
      received: true,
    },
  ]);
  let inputRef: any;
  const handleSubmit = () => {
    const date = new Date();
    setMessages(
      messages.concat([
        {
          writerUuid: '',
          writerId: '',
          writerName: '',
          writerEmail: '',
          sendTime: date,
          text: inputRef.value,
          received: false,
        },
      ]),
    );
    inputRef.value = '';
  };
  const handleEnterPress = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (e.target.value !== ('' || '\n') && e.target.value.length > 0) {
        handleSubmit();
      }
      inputRef.value = '';
    }
  };
  const { id, userName } = props.location.state;
  const chatLogs = messages.map(msg => (
    <S.ChatBox
      sendTime={`${msg.sendTime.getMonth()}월 ${msg.sendTime.getDay()}일 ${msg.sendTime.getHours()}:${msg.sendTime.getMinutes()}`}
      text={msg.text}
      received={msg.received}
      key={msg.sendTime.getTime()}
    />
  ));
  return (
    <S.Room>
      <S.UserCard userName={userName} />
      <S.ChatContainer>{chatLogs}</S.ChatContainer>
      <S.InputContainer>
        <S.InputArea
          ref={el => (inputRef = el)}
          onKeyPress={handleEnterPress}
        />
        <S.ButtonWrapper>
          <S.SendBtn onClick={handleSubmit}>전송</S.SendBtn>
        </S.ButtonWrapper>
      </S.InputContainer>
    </S.Room>
  );
};

export default ChatRoom;
