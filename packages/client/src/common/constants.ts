import dotenv from 'dotenv'

dotenv.config()

const sizeMap = {
  small: 24,
  medium: 36,
  large: 48,
}

export default sizeMap

const SOCKET_URL = 'https://sylvan-terra-275316.du.r.appspot.com/'
const API_SERVER_URL = 'https://sylvan-terra-275316.du.r.appspot.com/v1/'

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''
const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL
const LOGIN_URL = 'https://lee-park-bae-project.github.io/KAKIOTALK/login'

export const configs = {
  SOCKET_URL,
  API_SERVER_URL,
  CLIENT_ID,
  PUBLIC_URL,
  LOGIN_URL,
}

export const url = {
  main: '/',
  login: '/login',
  chatRoom: '/chat',
  room: '/chat',
}
