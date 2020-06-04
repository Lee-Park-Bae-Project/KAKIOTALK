import openSocket from 'socket.io'
import chalk from 'chalk'
import * as T from '../types'
import * as Redis from '../redis'
import { addMessage } from '../services/chat'

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
  chatFromClient = 'chatFromClient',
  chatFromServer = 'chatFromServer',
  joinRooms = 'joinRooms',
}

type SocketType = (socket: openSocket.Socket) => void

const socketCallBack = ((cb: SocketType) => (socket: openSocket.Socket) => cb(socket))

const onDisconnect = ((socket: openSocket.Socket) => {
  socket.on(Event.disconnect, () => {
    console.log(chalk.yellow(`${socket.id} is disconnected`))
    io.emit('leave', `${socket.id} is disconnected`)
  })
})

const afterLogin = ((socket: openSocket.Socket) => {
  socket.on(Event.afterLogin, async ({ uuid }: T.AfterLogin) => {
    const check = await Redis.get(uuid)
    await Redis.set(uuid, socket.id)
  })
})

export const chatFromServer = (roomUuid: string, chat: any) => {
  io.to(roomUuid).emit(Event.chatFromServer, chat)
}

const chatFromClient = socketCallBack((socket) => {
  socket.on(Event.chatFromClient, async ({
    roomUuid, content, createdAt, userUuid,
  }: T.SendMsg) => {
    try {
      const updatedAt = createdAt
      const data = await addMessage({
        roomUuid,
        content,
        createdAt,
        updatedAt,
        userUuid,
      })
      chatFromServer(roomUuid, data)
    } catch (e) {
      console.error(e)
    }
  })
})

const joinRooms = socketCallBack((socket) => {
  socket.on(Event.joinRooms, ({ roomUuids }:T.JoinRooms) => {
    roomUuids.forEach((roomUuid) => {
      socket.join(roomUuid)
    })
  })
})

const connection = () => {
  io.on('connection', (socket:openSocket.Socket) => {
    socket.emit('connection', `connected: ${socket.id}`)
    console.log(chalk.yellow(`connected: ${socket.id}`))

    onDisconnect(socket)
    afterLogin(socket)
    chatFromClient(socket)
    joinRooms(socket)
  })
}

const connect = (server: any) => {
  io = openSocket(server)
  connection()
}

export { connect }
