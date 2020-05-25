import socketOpen from 'socket.io-client';
import { configs } from '../common/constants';
import * as T from './types';

export enum Event {
  connect = 'connect',
  disconnect = 'disconnect',
  afterLogin = 'afterLogin',
  chatFromClient = 'chatFromClient',
  chatFromServer = 'chatFromServer',
  joinRooms = 'joinRooms',
}

const socket = socketOpen(configs.SOCKET_URL, { transports: ['websocket'] });
//  순수한 소켓만 사용하고 싶기 때문에 설정

const connect = () => {
  socket.on(Event.connect, (msg: string) => {
    console.log(`hi: ${msg}`);
  });
};

const disconnect = () => {
  socket.on(Event.disconnect, (msg: string) => {
    console.log(msg);
  });
};

socket.on(Event.chatFromServer, (chat: any) => {
  console.log(chat);
});

const afterLogin = ({ uuid }: T.AfterLogin) => {
  socket.emit(Event.afterLogin, { uuid });
};

const chatFromClient = ({
  roomUuid, content, createdAt, userUuid,
}: T.SendMsg) => {
  socket.emit(Event.chatFromClient, {
    roomUuid, content, createdAt, userUuid,
  });
};

const joinRooms = ({ roomUuids }: T.JoinRooms) => {
  socket.emit(Event.joinRooms, { roomUuids });
};

export {
  connect, disconnect, afterLogin, chatFromClient, joinRooms,
};
