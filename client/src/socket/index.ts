import socketOpen from 'socket.io-client';
import { socketUrl } from '../utils/constants';

const socket = socketOpen(socketUrl, { transports: ['websocket'] });

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
