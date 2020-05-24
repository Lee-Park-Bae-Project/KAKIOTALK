import openSocket from 'socket.io'
import chalk from 'chalk'
import * as T from '../types'
import * as Redis from '../redis'

declare global {
  namespace NodeJS {
    interface Global {
      socket: openSocket.Socket,
      io: openSocket.Server,
    }
  }
}

let io:openSocket.Server

export enum Event {
  connect = 'connect',
  disconnect = 'disconnect',
  afterLogin = 'afterLogin',
  message = 'message',
  joinRooms = 'joinRooms',
}

const onDisconnect = (socket: openSocket.Socket) => {
  socket.on(Event.disconnect, () => {
    console.log(chalk.yellow(`${socket.id} is disconnected`))
    io.emit('leave', `${socket.id} is disconnected`)
  })
}

const afterLogin = (socket: openSocket.Socket) => {
  socket.on(Event.afterLogin, async ({ uuid }: T.AfterLogin) => {
    const check = await Redis.get(uuid)
    console.log('check', check)
    await Redis.set(uuid, socket.id)
  })
}

const message = (socket: openSocket.Socket) => {
  socket.on(Event.message, ({
    roomUuid, content, createdAt,
  }: T.SendMsg) => {
    console.log(chalk.blue(roomUuid, content, createdAt))
    // 디비에 저장
  })
}

const joinRooms = (socket: openSocket.Socket) => {
  socket.on(Event.joinRooms, ({ roomUuids }:T.JoinRooms) => {
    roomUuids.forEach((roomUuid) => {
      socket.join(roomUuid)
    })
  })
}

const connection = () => {
  io.on('connection', (socket:openSocket.Socket) => {
    socket.emit('connection', `connected: ${socket.id}`)
    console.log(chalk.yellow(`connected: ${socket.id}`))

    onDisconnect(socket)
    afterLogin(socket)
    message(socket)
    joinRooms(socket)
  })
}

const connect = (server: any) => {
  io = openSocket(server)
  connection()
}

export { connect }
