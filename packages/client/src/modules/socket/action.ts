import { ApiChat } from 'types'

export const AFTER_LOGIN = 'SOCKET/AFTER_LOGIN' as const
export const JOIN_ROOM = 'SOCKET/JOIN_ROOM' as const
export const CHAT_FROM_CLIENT = 'SOCKET/CHAT_FROM_CLIENT' as const
export const CHAT_FROM_SERVER = 'SOCKET/CHAT_FROM_SERVER' as const

interface AfterLogin {
  uuid: string
}
export const afterLogin = ({ uuid }: AfterLogin) => ({
  type: AFTER_LOGIN,
  payload: { uuid },
})
interface JoinRooms {
  roomUuids: string[]
}
export const joinRooms = ({ roomUuids }: JoinRooms) => ({
  type: JOIN_ROOM,
  payload: { roomUuids },
})

interface ChatFromClient {
  roomUuid: string
  content: string
  createdAt: string
  userUuid: string
}
export const chatFromClient = (args: ChatFromClient) => ({
  type: CHAT_FROM_CLIENT,
  payload: { ...args },
})

interface ChatFromServer {
  newChat: ApiChat
}

export const chatFromServer = ({ newChat }: ChatFromServer) => ({
  type: CHAT_FROM_SERVER,
  payload: { newChat },
})
