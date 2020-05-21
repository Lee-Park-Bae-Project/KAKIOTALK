import socketOpen from 'socket.io-client';
import { configs } from '../common/constants';
import * as T from './types';

export enum Event {
  connect = 'connect',
  disconnect = 'disconnect',
  afterLogin = 'afterLogin',
  message = 'message',
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

const afterLogin = ({ uuid }: T.AfterLogin) => {
  socket.emit(Event.afterLogin, `my uuid : ${uuid}`);
};

const sendMsg = ({
  roomUuid, content, createdAt,
}: T.SendMsg) => {
  socket.emit(Event.message, {
    roomUuid, content, createdAt,
  });
};

export {
  connect, disconnect, afterLogin, sendMsg,
};
