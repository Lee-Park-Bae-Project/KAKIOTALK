import socketOpen from 'socket.io-client'
import { configs } from '../common/constants'

const createWebSocketConnection = () => {
  return new Promise((resolve, reject) => {
    const socket = socketOpen(configs.SOCKET_URL, { transports: ['websocket'] })

    socket.on('connection', () => {
      resolve(socket)
    })
    socket.on('error', (event: any) => {
      console.warn(event)
      reject(event)
    })
  })
}

export default createWebSocketConnection
