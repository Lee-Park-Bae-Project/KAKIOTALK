import React from 'react'
import ReactDOM from 'react-dom'
// import socketio from 'socket.io-client';
import App from './App'
import { configs } from './common/constants'

// const { SOCKET_URL } = configs;

// const socket = socketio.connect(SOCKET_URL);

// socket.on('connection', (msg: string) => {
//   console.log(msg);
//   socket.emit('init', 'im client');
// });

// socket.on('disconnect', (msg: string) => {
//   console.log(msg);
// });

// socket.on('init', (msg: string) => {
//   console.log(msg);
// });

// socket.on('leave', (msg: string) => {
//   console.log(msg);
// });

ReactDOM.render(
  <App />,
  document.getElementById(
    'root',
  ),
)
