import dotenv from 'dotenv'

dotenv.config()

const sizeMap = {
  small: 24,
  medium: 36,
  large: 48,
}

export default sizeMap

const SOCKET_URL = process.env.NODE_ENV === 'development' ? 'localhost:3050' : 'https://kakio.site'
const API_SERVER_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3050/v1/' : 'https://kakio.site/v1/'
const LOGIN_URL = process.env.NODE_ENV === 'development' ? 'http://locahost:3000/login' : 'https://kakiotalk.now.sh/login'

const NODE_ENV_VAR = process.env.NODE_ENV
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''
const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL

export const configs = {
  SOCKET_URL,
  API_SERVER_URL,
  CLIENT_ID,
  PUBLIC_URL,
  LOGIN_URL,
  NODE_ENV_VAR,
}

export const url = {
  main: {
    default: '/main',
    friendList: '/main/friend-list',
    chatList: '/main/chat-list',
    makeChat: 'main/make-room',
  },
  login: '/login',
  chatRoom: '/chat',
  room: '/chat',
} as const
