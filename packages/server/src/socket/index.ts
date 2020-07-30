import openSocket from 'socket.io'
import chalk from 'chalk'
import * as T from '../types'
import { addMessage } from '../services/chat'
import { Socket } from '@kakio/common' 

declare global {
  namespace NodeJS {
    interface Global {
      socket: openSocket.Socket,
      io: openSocket.Server,
    }
  }
}

let io:openSocket.Server
const { EventMap } = Socket

type SocketType = (socket: openSocket.Socket) => void

const socketCallBack = ((cb: SocketType) => (socket: openSocket.Socket) => cb(socket))

const onDisconnect = ((socket: openSocket.Socket) => {
  socket.on(EventMap.DISCONNECT, () => {
    console.log(chalk.yellow(`${socket.id} is disconnected`))
    io.emit('leave', `${socket.id} is disconnected`)
  })
})

const afterLogin = ((socket: openSocket.Socket) => {
  socket.on(EventMap.AFTER_LOGIN, async ({ uuid }: T.AfterLogin) => {
    console.log(chalk.cyan('after login'))
  })
})

export const chatFromServer = (roomUuid: string, chat: any) => {
  console.log(chalk.cyan('chat from server'))
  io.to(roomUuid).emit(EventMap.CHAT_FROM_SERVER, chat)
}

const chatFromClient = socketCallBack((socket) => {
  socket.on(EventMap.CHAT_FROM_CLIENT, async ({
    roomUuid, content, createdAt, userUuid,
  }: T.SendMsg) => {
    console.log(chalk.cyan('chat from client'))
    try {
      console.log(roomUuid, content, createdAt, userUuid)
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
  socket.on(EventMap.JOIN_ROOM, ({ roomUuids }:T.JoinRooms) => {
    console.log(chalk.cyan('join room'))
    roomUuids.forEach((roomUuid) => {
      socket.join(roomUuid)
    })
  })
})

const connection = () => {
  io.on(EventMap.CONNECT, (socket:openSocket.Socket) => {
    socket.emit(EventMap.CONNECT, `connected: ${socket.id}`)
    console.log(chalk.yellow(`connected: ${socket.id}`))

    onDisconnect(socket)
    afterLogin(socket)
    chatFromClient(socket)
    joinRooms(socket)
  })
}

const connect = (server: any) => {
  io = openSocket(server, {pingTimeout: 60000})
  connection()
}

export { connect }
