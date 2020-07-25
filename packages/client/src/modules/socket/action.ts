import { ApiChat } from 'types'
import { Socket } from '@kakio/common'

const { EventMap } = Socket
interface AfterLogin {
  uuid: string
}
export const afterLogin = ({ uuid }: AfterLogin) => ({
  type: EventMap.AFTER_LOGIN,
  payload: { uuid },
})
interface JoinRooms {
  roomUuids: string[]
}
export const joinRooms = ({ roomUuids }: JoinRooms) => ({
  type: EventMap.JOIN_ROOM,
  payload: { roomUuids },
})

interface ChatFromClient {
  roomUuid: string
  content: string
  createdAt: string
  userUuid: string
}
export const chatFromClient = (args: ChatFromClient) => ({
  type: EventMap.CHAT_FROM_CLIENT,
  payload: { ...args },
})

interface ChatFromServer {
  newChat: ApiChat
}

export const chatFromServer = ({ newChat }: ChatFromServer) => ({
  type: EventMap.CHAT_FROM_SERVER,
  payload: { newChat },
})
