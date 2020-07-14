import dotenv from 'dotenv'

dotenv.config()

const sizeMap = {
  small: 24,
  medium: 36,
  large: 48,
}

export default sizeMap

const SOCKET_URL = process.env.NODE_ENV === 'development' ? 'localhost:3050' : 'http://34.64.167.225:3050'

const API_SERVER_URL = 'http://localhost:3050/v1/'
const API_SERVER_URL_PRODUCT = 'http://34.64.167.225:3050/v1/'

const NODE_ENV_VAR = process.env.NODE_ENV
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''
const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL

const LOGIN_URL = 'http://locahost:3000/login'
const LOGIN_URL_PRODUCT = 'https://lee-park-bae-project.github.io/KAKIOTALK/login'

export const configs = {
  SOCKET_URL,
  API_SERVER_URL,
  API_SERVER_URL_PRODUCT,
  CLIENT_ID,
  PUBLIC_URL,
  LOGIN_URL,
  LOGIN_URL_PRODUCT,
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
