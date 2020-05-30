import React, {
  FC,
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import { getCurTimeDBFormat } from 'common/utils';
import { WithAuthProps } from 'hocs/withAuth';
import ChatBox from 'components/ChatBox';
import { ReduxChatType, ReduxState } from 'types';
import { chatFromClient } from 'socket';
import * as S from './style';

interface Props extends WithAuthProps{
  chatState: ReduxState<ReduxChatType>;
  roomUuid: string;
  handleBack: () => void;
  roomName: string;
}

const ChatRoom: FC<Props> = ({
  chatState,
  uuid,
  roomUuid,
  handleBack,
  roomName,
}) => {
  const messageRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>('');
  const [isFirstScroll, setIsFirstScroll] = useState<boolean>(true);

  useEffect(() => {
    if (!chatState.data[roomUuid]) {
      return;
    }
    if (isFirstScroll) {
      setIsFirstScroll(false);
      if (chatContainerRef && chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
      return;
    }
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatState,
    roomUuid,
    isFirstScroll]);

  const handleSubmit = () => {
    if (!messageRef) {
      return;
    }

    chatFromClient({
      content: message,
      roomUuid,
      createdAt: getCurTimeDBFormat(),
      userUuid: uuid,
    });

    if (messageRef.current) {
      messageRef.current.focus();
    }
    setMessage('');
  };
  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.target && e.currentTarget.value.trim().length > 0) {
        handleSubmit();
      }
    }
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Back onClick={handleBack}>
          back
        </S.Back>
        <S.Title>
          {roomName}
        </S.Title>
      </S.Header>
      <S.ChatContainer ref={chatContainerRef}>
        {
          !chatState.data[roomUuid]
            ? (<div>loading</div>)
            : (
              (
                chatState.data[roomUuid].map(({
                  content, createdAt, metaInfo, updatedAt, uuid: _uuid,
                }) => (
                <ChatBox
                  key={_uuid}
                  userUuid={uuid}
                  content={content}
                  createdAt={createdAt}
                  metaInfo={metaInfo}
                  updatedAt={updatedAt}
                  uuid={_uuid}
                  isMine={metaInfo.sender.uuid === uuid}
                />
                ))
              )
            )
        }
        <S.ChatBottom ref={scrollRef}></S.ChatBottom>
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

export default ChatRoom;
