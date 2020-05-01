import socketOpen from 'socket.io-client';
import { configs } from '../common/constants';

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

export { connect, disconnect };
