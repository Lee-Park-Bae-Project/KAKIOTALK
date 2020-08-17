/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  apply, call, delay, fork, put, take,
} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import createWebSocketConnection from 'socket'
import { Socket } from '@kakio/common'
import {
  addChat,
  addChatOffset,
} from 'modules/chat'
import {
  getNewMessage, leaveRoomSuccess,
} from 'modules/room'
import { ApiChat } from 'types'

import { url } from 'common/constants'
import { push } from 'common/utils'

const { EventMap } = Socket
function createSocketChannel(socket: SocketIOClient.Socket) {
  return eventChannel((emit) => {
    const chatFromServerHandler = (newChat: ApiChat) => {
      const { uuid: roomUuid } = newChat.metaInfo.room
      const {
        updatedAt, content,
      } = newChat
      emit(addChat(roomUuid, newChat))
      emit(addChatOffset({
        roomUuid,
        amount: 1,
      }))
      emit(getNewMessage(roomUuid, content, updatedAt))
    }

    const leaveRoomFromServerHandler = ({
      roomUuid, userUuid,
    }: Socket.LeaveRoom) => {
      push(url.main.chatList)
      emit(leaveRoomSuccess({
        roomUuid, userUuid,
      }))
    }

    const errorHandler = (errorEvent: any) => {
      emit(new Error(errorEvent))
    }
    socket.on('error', errorHandler)
    socket.on(EventMap.CHAT_FROM_SERVER, chatFromServerHandler)
    socket.on(EventMap.LEAVE_ROOM_FROM_SERVER, leaveRoomFromServerHandler)

    const unsubscribe = () => {
      socket.off(EventMap.CHAT_FROM_SERVER, chatFromServerHandler)
      socket.off(EventMap.LEAVE_ROOM_FROM_SERVER, leaveRoomFromServerHandler)
    }

    return unsubscribe
  })
}

function* handleSocketAction(socket: SocketIOClient.Socket) {
  while (true) {
    const event = yield take([
      EventMap.AFTER_LOGIN,
      EventMap.JOIN_ROOM,
      EventMap.CHAT_FROM_CLIENT,
      EventMap.LEAVE_ROOM_FROM_CLIENT,
    ])
    const {
      type, payload,
    } = event
    switch (type) {
      case EventMap.CHAT_FROM_CLIENT: {
        yield apply(socket, socket.emit, [EventMap.CHAT_FROM_CLIENT, payload])
        break
      }
      case EventMap.LEAVE_ROOM_FROM_CLIENT: {
        yield apply(socket, socket.emit, [EventMap.LEAVE_ROOM_FROM_CLIENT, payload])
        break
      }
      default: {
        yield apply(socket, socket.emit, [type, payload])
        break
      }
    }
  }
}

function* readFromSocketChannel(socket: SocketIOClient.Socket) {
  const socketChannel = yield call(createSocketChannel, socket)
  while (true) {
    const payload = yield take(socketChannel) // channel 로 emit 된 값
    yield put(payload)
  }
}

export default function* chatSaga() {
  const socket: SocketIOClient.Socket = yield call(createWebSocketConnection)
  yield fork(readFromSocketChannel, socket)
  yield fork(handleSocketAction, socket)
}
