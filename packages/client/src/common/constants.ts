import dotenv from 'dotenv'

dotenv.config()

const sizeMap = {
  small: 24,
  medium: 36,
  large: 48,
}

export default sizeMap

const SOCKET_URL = process.env.NODE_ENV === 'development' ? 'localhost:3050' : 'https://sylvan-terra-275316.du.r.appspot.com/'

const API_SERVER_URL = 'http://localhost:3050/v1/'
const API_SERVER_URL_PRODUCT = 'https://sylvan-terra-275316.du.r.appspot.com/v1/'

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
  main: '/main',
  login: '/login',
  chatRoom: '/chat',
  room: '/chat',
} as const
