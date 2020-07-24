/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  apply, call, delay, fork, put, putResolve, take, takeEvery,
} from 'redux-saga/effects'
import {
  Buffer, buffers, eventChannel,
} from 'redux-saga'
import { socket as _socket } from 'socket'
import * as SocketAction from 'modules/socket'
import socketOpen from 'socket.io-client'
import {
  addChat,
  addChatOffset,
} from 'modules/chat'
import { ApiChat } from 'types'

function createWebSocketConnection() {
  return new Promise((resolve, reject) => {
    const socket = socketOpen('localhost:3050', { transports: ['websocket'] })

    socket.on('connection', () => {
      console.log('connection')
      resolve(socket)
    })
    socket.on('error', (event: any) => {
      console.log('error', event)

      reject(event)
    })
  })
}
// this function creates an event channel from a given socket
// Setup subscription to incoming `ping` events
function createSocketChannel(socket: SocketIOClient.Socket) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel((emit) => {
    const pingHandler = (event: any) => {
      // puts event payload into the channel
      // this allows a Saga to take this payload from the returned channel
      console.log(event)
      if (event) {
        emit(event.payload)
      }
    }

    const chatFromServerHandler = (newChat: ApiChat) => {
      const { uuid: roomUuid } = newChat.metaInfo.room
      console.log('chat from server')
      emit(addChat(roomUuid, newChat))
      emit(addChatOffset({
        roomUuid,
        amount: 1,
      }))
    }

    const errorHandler = (errorEvent: any) => {
      emit(new Error(errorEvent))
    }
    // setup the subscription
    socket.on('pingg', pingHandler)
    socket.on('error', errorHandler)
    socket.on(SocketAction.CHAT_FROM_SERVER, chatFromServerHandler)
    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      socket.off('ping', pingHandler)
      socket.off(SocketAction.CHAT_FROM_SERVER, chatFromServerHandler)
    }

    return unsubscribe
  })
}

function* handleSocketAction(socket: SocketIOClient.Socket) {
  while (true) {
    console.log('대기중')
    const event = yield take([
      SocketAction.AFTER_LOGIN,
      SocketAction.JOIN_ROOM,
      SocketAction.CHAT_FROM_CLIENT,
    ])
    console.log(event)
    const {
      type, payload,
    } = event

    switch (type) {
      case SocketAction.CHAT_FROM_CLIENT: {
        yield apply(socket, socket.emit, [SocketAction.CHAT_FROM_CLIENT, payload])
        break
      }
      default: {
        yield apply(socket, socket.emit, [type, payload])
        break
      }
    }
    console.log('emit', type)
  }
}

function* read() {
  const socketChannel = yield call(createSocketChannel, _socket)
  while (true) {
    const action = yield take(socketChannel)
    console.log(action)

    yield put(action)
  }
}

export default function* chatSaga() {
  const socketChannel = yield call(createSocketChannel, _socket)
  yield fork(handleSocketAction, _socket)

  while (true) {
    const payload = yield take(socketChannel) // channel 로 emit 된 값
    console.log(payload)
    yield put(payload)
  }
}
