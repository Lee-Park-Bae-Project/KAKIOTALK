import socketOpen from 'socket.io-client'
import { addChat } from 'modules/chat'
import { ApiChat } from 'types'
import { Dispatch } from 'react'
import { configs } from '../common/constants'
import {
  AfterLogin,
  ChatFromClient,
  JoinRooms,
} from './types'

export enum Event {
  connect = 'connect',
  disconnect = 'disconnect',
  afterLogin = 'afterLogin',
  chatFromClient = 'chatFromClient',
  chatFromServer = 'chatFromServer',
  joinRooms = 'joinRooms',
}

export const socket = socketOpen(configs.SOCKET_URL, { transports: ['websocket'] })

export const connect = () => {
  socket.on(Event.connect, (msg: string) => {
    console.warn(msg)
  })
}

export const disconnect = () => {
  socket.on(Event.disconnect, (msg: string) => {
    console.warn(msg)
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const chatFromServer = (dispatch: Dispatch<any>) => {
  socket.on(Event.chatFromServer, (newChat: ApiChat) => {
    dispatch(addChat(newChat.metaInfo.room.uuid, newChat))
  })
}

export const afterLogin: AfterLogin = ({ uuid }) => {
  socket.emit(Event.afterLogin, { uuid })
}

export const chatFromClient: ChatFromClient = ({
  roomUuid, content, createdAt, userUuid,
}) => {
  socket.emit(Event.chatFromClient, {
    roomUuid, content, createdAt, userUuid,
  })
}

export const joinRooms: JoinRooms = ({ roomUuids }) => {
  socket.emit(Event.joinRooms, { roomUuids })
}

export const removeSocketEventListener = (eventName: string) => {
  socket.removeEventListener(eventName)
}
