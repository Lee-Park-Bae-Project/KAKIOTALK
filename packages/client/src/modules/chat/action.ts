import { AxiosError } from 'axios'
import { ApiChat } from 'types'

export const GET_CHAT_REQUEST = 'room/GET_CHAT_REQUEST' as const
export const GET_CHAT_SUCCESS = 'room/GET_CHAT_SUCCESS' as const
export const GET_CHAT_FAILURE = 'room/GET_CHAT_FAIL' as const
export const ADD_CHAT = 'room/ADD_CHAT' as const

export const getChatRequest = (roomUuid: string) => ({
  type: GET_CHAT_REQUEST,
  payload: roomUuid,
})

export const getChatSuccess = (roomUuid: string, newChat: ApiChat[]) => ({
  type: GET_CHAT_SUCCESS,
  payload: {
    roomUuid,
    newChat,
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

