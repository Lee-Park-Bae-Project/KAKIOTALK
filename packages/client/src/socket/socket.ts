import socketOpen from 'socket.io-client'
import {
  addChat, addChatOffset,
} from 'modules/chat'
import { ApiChat } from 'types'
import { Dispatch } from 'react'
import { Sockets } from '@kakio/common'
import { configs } from '../common/constants'
import {
  AfterLogin,
  ChatFromClient,
  JoinRooms,
} from './types'

// export enum Event {
//   connect = 'connect',
//   disconnect = 'disconnect',
//   afterLogin = 'afterLogin',
//   chatFromClient = 'chatFromClient',
//   chatFromServer = 'chatFromServer',
//   joinRooms = 'joinRooms',
// }

export const socket = socketOpen(configs.SOCKET_URL, { transports: ['websocket'] })

export const connect = () => {
  socket.on(Sockets.EventMap.connect, (msg: string) => {
    console.warn(msg)
  })
}

export const disconnect = () => {
  socket.on(Sockets.EventMap.disconnect, (msg: string) => {
    console.warn(msg)
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const chatFromServer = (dispatch: Dispatch<any>) => {
  socket.on(Sockets.EventMap.chatFromServer, (newChat: ApiChat) => {
    const { uuid: roomUuid } = newChat.metaInfo.room
    dispatch(addChat(roomUuid, newChat))
    dispatch(addChatOffset({
      roomUuid, amount: 1,
    }))
  })
}

export const afterLogin: AfterLogin = ({ uuid }) => {
  socket.emit(Sockets.EventMap.afterLogin, { uuid })
}

export const chatFromClient: ChatFromClient = ({
  roomUuid, content, createdAt, userUuid,
}) => {
  socket.emit(Sockets.EventMap.chatFromClient, {
    roomUuid, content, createdAt, userUuid,
  })
}

export const joinRooms: JoinRooms = ({ roomUuids }) => {
  socket.emit(Sockets.EventMap.joinRooms, { roomUuids })
}

export const removeSocketEventListener = (eventName: string) => {
  socket.removeEventListener(eventName)
}
