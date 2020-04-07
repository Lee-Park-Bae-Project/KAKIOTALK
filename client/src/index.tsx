import React from 'react';
import ReactDOM from 'react-dom';
import socketio from 'socket.io-client';
import App from './App';

import { socketUrl } from './common/constants';

const socket = socketio.connect(socketUrl);

socket.on('connection', (msg: string) => {
  console.log(msg);
  socket.emit('init', 'im client');
});

socket.on('disconnect', (msg: string) => {
  console.log(msg);
});

socket.on('init', (msg: string) => {
  console.log(msg);
});

socket.on('leave', (msg: string) => {
  console.log(msg);
});


ReactDOM.render(
  <App />,
  document.getElementById(
    'root',
  ),
);
