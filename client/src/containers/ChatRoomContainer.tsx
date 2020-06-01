import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import ChatRoom from 'pages/chatroom';
import withAuth, { WithAuthProps } from 'hocs/withAuth';
import {
  Event,
  chatFromServer,
  removeSocketEventListener,
  joinRooms,
} from 'socket';
import { getChatRequest } from 'modules/chat';

interface MatchParams {
  roomUuid: string;
}
type Props = WithAuthProps & RouteComponentProps<MatchParams>

const ChatContainer: React.FC<Props> = (props) => {
  const { match, history } = props;

  const dispatch = useDispatch();
  const chatState = useSelector((state: RootState) => state.chat);
  const roomState = useSelector((state: RootState) => state.room);
  const [roomUuid, setRoomUuid] = useState<string>('');
  const [roomName, setRoomName] = useState<string>('');

  const handleBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (roomUuid.length) {
      joinRooms({ roomUuids: [roomUuid] });
    }
  }, [roomUuid]);

  useEffect(() => {
    const rn = roomState.data.find((v) => v.uuid === roomUuid);
    if (!rn) {
      return;
    }

    setRoomName(rn.participants.map((v) => v.name).join(', '));
  }, [roomState, roomUuid]);

  useEffect(() => {
    setRoomUuid(match.params.roomUuid);
    dispatch(getChatRequest(match.params.roomUuid));
  }, [match.params.roomUuid]);

  useEffect(() => {
    chatFromServer(dispatch);

    return (() => {
      removeSocketEventListener(Event.chatFromServer);
    });
  });

  return (
    <ChatRoom
      {...props}
      chatState={chatState}
      roomUuid={roomUuid}
      handleBack={handleBack}
      roomName={roomName}
    />
  );
};

export default withAuth(withRouter(ChatContainer));
