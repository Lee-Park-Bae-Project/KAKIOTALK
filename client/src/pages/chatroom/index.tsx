import React, {
  FC,
  useState,
  useEffect,
  useRef,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import { getChatRequest } from 'modules/chat';
import {
  chatFromClient,
  Event,
  chatFromServer,
  removeSocketEventListener,
  joinRooms,
} from 'socket';
import { getCurTimeDBFormat } from 'common/utils';
import withAuth, { WithAuthProps } from 'hocs/withAuth';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ChatBox from 'components/ChatBox';
import * as S from './style';


interface MatchParams {
  roomUuid: string;
}

const ChatRoom: FC<WithAuthProps & RouteComponentProps<MatchParams>> = ({
  name,
  email,
  uuid,
  history,
  match,
}) => {
  const dispatch = useDispatch();
  const messageRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>('');
  const [roomUuid, setRoomUuid] = useState<string>('');
  const chatState = useSelector((state: RootState) => state.chat);
  const [isFirstScroll, setIsFirstScroll] = useState<boolean>(true);

  useEffect(() => {
    setRoomUuid(match.params.roomUuid);
    dispatch(getChatRequest(match.params.roomUuid));
  }, [match.params.roomUuid]);

  useEffect(() => {
    if (roomUuid.length) {
      joinRooms({ roomUuids: [roomUuid] });
    }
  }, [roomUuid]);
  useEffect(() => {
    chatFromServer(dispatch);
    return (() => {
      removeSocketEventListener(Event.chatFromServer);
    });
  }, []);

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
  }, [chatState]);
  const handleBack = () => {
    history.goBack();
  };
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

export default withAuth(withRouter(ChatRoom));
