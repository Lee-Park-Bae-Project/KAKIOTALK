import { AxiosError } from 'axios'
import { ApiChat } from 'types'

export const GET_CHAT_REQUEST = 'room/GET_CHAT_REQUEST' as const
export const GET_CHAT_SUCCESS = 'room/GET_CHAT_SUCCESS' as const
export const GET_CHAT_FAILURE = 'room/GET_CHAT_FAIL' as const
export const ADD_CHAT = 'room/ADD_CHAT' as const

interface GetChatRequest {
  roomUuid: string
  limit: number
  offset: number
}
export const getChatRequest = ({
  roomUuid,
  limit,
  offset,
}: GetChatRequest) => ({
  type: GET_CHAT_REQUEST,
  payload: {
    roomUuid,
    limit,
    offset,
  },
})

interface GetChatSuccess {
  roomUuid: string
  newChat: ApiChat[]
  offset: number
  limit: number
}
export const getChatSuccess = ({
  roomUuid, newChat, offset, limit,
}: GetChatSuccess) => ({
  type: GET_CHAT_SUCCESS,
  payload: {
    roomUuid,
    newChat,
    offset,
    limit,
  },
})

export const getChatFailure = (e: AxiosError) => ({
  type: GET_CHAT_FAILURE,
  message: e.message,
  payload: {},
})

export const addChat = (roomUuid: string, newChat: ApiChat) => ({
  type: ADD_CHAT,
  payload: {
    roomUuid,
    newChat,
  },
})
