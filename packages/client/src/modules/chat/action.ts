import { AxiosError } from 'axios'
import { ApiChat } from 'types'

export const GET_CHAT_REQUEST = 'room/GET_CHAT_REQUEST' as const
export const GET_CHAT_SUCCESS = 'room/GET_CHAT_SUCCESS' as const
export const GET_CHAT_FAILURE = 'room/GET_CHAT_FAIL' as const

export const ADD_CHAT = 'room/ADD_CHAT' as const
export const ADD_CHAT_OFFSET = 'room/ADD_CHAT_OFFSET' as const

export const LOAD_MORE_REQUEST = 'room/LOAD_MORE_REQUEST' as const
export const LOAD_MORE_SUCCESS = 'room/LOAD_MORE_SUCCESS' as const
export const LOAD_MORE_FAILURE = 'room/LOAD_MORE_FAILURE' as const

interface GetChatRequest {
  roomUuid: string
  offset: number
  limit: number
}
export const getChatRequest = ({
  roomUuid,
  offset,
  limit,
}: GetChatRequest) => ({
  type: GET_CHAT_REQUEST,
  payload: {
    roomUuid,
    offset,
    limit,
  },
})

interface GetChatSuccess {
  roomUuid: string
  chats: ApiChat[]
  offset: number
  limit: number
}
export const getChatSuccess = ({
  roomUuid, chats, offset, limit,
}: GetChatSuccess) => ({
  type: GET_CHAT_SUCCESS,
  payload: {
    roomUuid,
    chats,
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

export const addChatOffset = ({
  roomUuid,
  amount,
}: {
  roomUuid: string
  amount: number
}) => ({
  type: ADD_CHAT_OFFSET,
  payload: {
    roomUuid,
    amount,
  },
})

interface LoadMoreRequest {
  roomUuid: string
  offset: number
  limit: number
}
export const loadMoreRequest = (roomUuid: string) => ({
  type: LOAD_MORE_REQUEST,
  payload: { roomUuid },
})

interface GetChatSuccess {
  roomUuid: string
  chats: ApiChat[]
  offset: number
  limit: number
}

export const loadMoreSuccess = ({
  roomUuid, chats, offset, limit,
}: GetChatSuccess) => ({
  type: LOAD_MORE_SUCCESS,
  payload: {
    roomUuid,
    chats,
    offset,
    limit,
  },
})

export const loadMoreFailure = (e: AxiosError) => ({
  type: LOAD_MORE_FAILURE,
  message: e.message,
})
