import socketOpen from 'socket.io-client';
import { configs } from '../common/constants';

const socket = socketOpen(configs.SOCKET_URL, { transports: ['websocket'] });

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

export {
  connect,
  disconnect,
};
