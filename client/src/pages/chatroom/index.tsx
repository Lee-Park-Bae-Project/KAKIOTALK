import React, {
  FC,
  useState,
  useEffect,
  useRef,
} from 'react';
import { sendMsg } from 'socket';
import { IChat } from 'types';
import { getCurTimeDBFormat } from 'common/utils';
import shortid from 'shortid';
import withAuth, { WithAuthProps } from 'hocs/withAuth';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as S from './style';


const ChatRoom: FC<WithAuthProps & RouteComponentProps & RouteComponentProps> = ({
  name,
  email,
  uuid,
  history,
}) => {
  const [messages, setMessages] = useState<Partial<IChat>[]>([]);
  const messageRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    console.log(name, email, uuid);
  }, [name,
    email,
    uuid]);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const handleBack = () => {
    history.goBack();
  };
  const handleSubmit = () => {
    const date = new Date();
    if (!messageRef) {
      return;
    }
    setMessages(
      messages.concat([
        {
          roomParticipantsId: 123,
          updatedAt: getCurTimeDBFormat(),
          content: messageRef.current?.value,
          createdAt: getCurTimeDBFormat(),
        },
      ])
    );
    sendMsg({
      sender: 'sender',
      content: message,
      roomId: 'typo',
      createdAt: date.toUTCString(),
    });

    if (messageRef.current) {
      messageRef.current.focus();
    }
    setMessage('');
  };
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.target && e.currentTarget.value.trim().length > 0) {
        handleSubmit();
      }
    }
  };


  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Back onClick={handleBack}>
          back
        </S.Back>
        <S.Title>
          방이름
        </S.Title>
      </S.Header>
      <S.ChatContainer>
        {
          messages.map(({ content }) => (
            <S.ChatBox key={shortid.generate()}>{content}</S.ChatBox>
          ))
        }
      </S.ChatContainer>
      <S.InputContainer>
        <S.InputArea
          ref={messageRef}
          value={message}
          onChange={handleMessageChange}
          onKeyPress={handleEnterPress}
        />
        <S.ButtonWrapper>
          <S.SendBtn onClick={handleSubmit}>전송</S.SendBtn>
        </S.ButtonWrapper>
      </S.InputContainer>
    </S.Container>
  );
};

export default withAuth(withRouter(ChatRoom));
