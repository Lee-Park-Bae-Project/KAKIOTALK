import openSocket from 'socket.io'
import chalk from 'chalk'

declare global {
  namespace NodeJS {
    interface Global {
      socket: openSocket.Socket,
      io: openSocket.Server,
    }
  }
}
const init = (socket: openSocket.Socket) => {
  socket.on('init', (data) => {
    global.io.emit('init', `${socket.id} is initialized`)
  })
}

const onDisconnect = (socket: openSocket.Socket) => {
  socket.on('disconnect', () => {
    console.log(chalk.yellow(`${socket.id} is disconnected`))
    global.io.emit('leave', `${socket.id} is disconnected`)
  })
}

const afterLogin = (socket: openSocket.Socket) => {
  socket.on('afterLogin', (msg) => {
    console.log(chalk.blue(msg))
  })
}

const sendMsg = (socket: openSocket.Socket) => {
  socket.on('sendMsg', ({
    sender, roomId, content, createdAt,
  }) => {
    console.log(sender, roomId, content, createdAt)
  })
}
const connection = (io:openSocket.Server) => {
  io.on('connection', (socket:openSocket.Socket) => {
    global.socket = socket
    socket.emit('connection', `connected: ${socket.id}`)
    console.log(chalk.yellow(`connected: ${socket.id}`))

    init(socket)
    onDisconnect(socket)
    afterLogin(socket)
    sendMsg(socket)
  })
}

const connect = (server: any) => {
  const io:openSocket.Server = openSocket(server)
  global.io = io
  connection(io)
}

export { connect }
