import socketOpen from 'socket.io-client';
import { configs } from '../common/constants';
import * as T from './types';

const socket = socketOpen(configs.SOCKET_URL, { transports: ['websocket'] });
//  순수한 소켓만 사용하고 싶기 때문에 설정

const connect = () => {
  socket.on('connect', (msg: string) => {
    console.log(`hi: ${msg}`);
  });
};

const disconnect = () => {
  socket.on('disconnect', (msg: string) => {
    console.log(msg);
  });
};

const afterLogin = ({ uuid }: T.AfterLogin) => {
  socket.emit('afterLogin', `my uuid : ${uuid}`);
};

const sendMsg = ({
  sender, roomId, content, createdAt,
}: T.SendMsg) => {
  socket.emit('sendMsg', {
    sender, roomId, content, createdAt,
  });
};

export {
  connect, disconnect, afterLogin, sendMsg,
};
