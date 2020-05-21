import openSocket from 'socket.io'
import chalk from 'chalk'
import * as T from '../types'

declare global {
  namespace NodeJS {
    interface Global {
      socket: openSocket.Socket,
      io: openSocket.Server,
    }
  }
}

export enum Event {
  connect = 'connect',
  disconnect = 'disconnect',
  afterLogin = 'afterLogin',
  message = 'message',
}

const onDisconnect = (socket: openSocket.Socket) => {
  socket.on(Event.disconnect, () => {
    console.log(chalk.yellow(`${socket.id} is disconnected`))
    global.io.emit('leave', `${socket.id} is disconnected`)
  })
}

const afterLogin = (socket: openSocket.Socket) => {
  socket.on(Event.afterLogin, (msg) => {
    console.log(chalk.blue(msg))
  })
}

const message = (socket: openSocket.Socket) => {
  socket.on(Event.message, ({
    roomUuid, content, createdAt,
  }: T.SendMsg) => {
    console.log(chalk.blue(roomUuid, content, createdAt))
  })
}
const connection = (io:openSocket.Server) => {
  io.on('connection', (socket:openSocket.Socket) => {
    global.socket = socket
    socket.emit('connection', `connected: ${socket.id}`)
    console.log(chalk.yellow(`connected: ${socket.id}`))

    onDisconnect(socket)
    afterLogin(socket)
    message(socket)
  })
}

const connect = (server: any) => {
  const io:openSocket.Server = openSocket(server)
  global.io = io
  connection(io)
}

export { connect }
