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
import { ApiChat } from 'types'

const { EventMap } = Socket
function createSocketChannel(socket: SocketIOClient.Socket) {
  return eventChannel((emit) => {
    const chatFromServerHandler = (newChat: ApiChat) => {
      const { uuid: roomUuid } = newChat.metaInfo.room

      emit(addChat(roomUuid, newChat))
      emit(addChatOffset({
        roomUuid,
        amount: 1,
      }))
    }

    const errorHandler = (errorEvent: any) => {
      emit(new Error(errorEvent))
    }
    socket.on('error', errorHandler)
    socket.on(EventMap.CHAT_FROM_SERVER, chatFromServerHandler)
    const unsubscribe = () => {
      socket.off(EventMap.CHAT_FROM_SERVER, chatFromServerHandler)
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
    ])
    const {
      type, payload,
    } = event

    switch (type) {
      case EventMap.CHAT_FROM_CLIENT: {
        yield apply(socket, socket.emit, [EventMap.CHAT_FROM_CLIENT, payload])
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
