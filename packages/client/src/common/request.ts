import axios, {
  AxiosError, AxiosRequestConfig, AxiosResponse,
} from 'axios'
import * as Type from 'types'
import {
  APIs, Models,
} from '@kakio/common'
import { configs } from './constants'

const API_SERVER_URL = configs.NODE_ENV_VAR === 'production' ? configs.API_SERVER_URL_PRODUCT : configs.API_SERVER_URL

const instance = axios.create({
  baseURL: API_SERVER_URL,
  timeout: 3000,
  timeoutErrorMessage: '서버가 응답하지 않습니다.',
  withCredentials: true,
})

export type ResponseType<T> = {
  success: boolean
  data: T
}

export type AxiosResponseType<T> = AxiosResponse<ResponseType<T>>

export type ApiCallback<T = {}> = (
  err: AxiosResponse<ResponseType<T>> | null,
  response?: AxiosResponse<ResponseType<T>>,
) => void

async function Axios<T>(config: AxiosRequestConfig) {
  try {
    const response = await instance.request<ResponseType<T>>(config)
    return response.data.data
  } catch (e) {
    throw new Error(e.response.data.data.message)
  }
}

export const getProfile = () => Axios<Type.ApiUser>({
  method: 'GET',
  url: 'user/my-profile',
})

export const getFriendList = () => Axios<Type.ApiUser[]>({
  method: 'GET',
  url: 'social/friend-list',
})
export const getChatList = () => Axios({
  method: 'GET',
  url: 'dummy/chat-list',
})
export const getLogout = () => Axios({
  method: 'GET',
  url: 'auth/logout',
})
export const getUserInfo = () => Axios<Type.SimpleUserType>({
  method: 'GET',
  url: 'auth/check-auth',
})

interface GetFirstChat extends AxiosRequestConfig{
  roomUuid: string
}
export const getFirstChat = ({ roomUuid }: GetFirstChat) => Axios<APIs.GetFirstChat>({
  method: 'GET',
  url: `chat/first-chat/${roomUuid}`,
})

interface GetLoginArgs {
  googleId: string
  email: string
  name: string
  googleAccessToken: string
  imageUrl: string
}
export const getLogin = (args: GetLoginArgs) => Axios({
  method: 'POST',
  url: 'auth/google',
  data: args,
})

export const getRooms = () => Axios<Models.Room[]>({
  method: 'GET',
  url: 'chat/room',
})

export const addFriend = (email: string) => Axios<Type.ApiUser>({
  method: 'POST',
  url: 'social/add-friend',
  data: { email },
})

export const deleteFriend = (uuid: string) => Axios<{uuid: string}>({
  method: 'DELETE',
  url: 'social/delete-friend',
  data: { uuid },
})
export const updateProfile = ({
  name,
  statusMessage,
}: {
  name: string
  statusMessage: string
}) => Axios<Type.ApiUser>({
  method: 'PATCH',
  url: 'user/update-profile',
  data: {
    name, statusMessage,
  },
})

interface GetChatByRoom {
  roomUuid: string
  limit: number
  offset: number
}

interface Chat {
  chats: Type.ApiChat[]
  offset: number
  limit: number
}

export const getChatByRoom = ({
  roomUuid,
  limit,
  offset,
}: GetChatByRoom) => Axios<Chat>({
  method: 'GET',
  url: `/chat/message/${roomUuid}?offset=${offset}&limit=${limit}`,
})

export const loadMoreChat = ({
  roomUuid,
  limit,
  offset,
}: {
  roomUuid: string
  limit: number
  offset: number
}) => Axios<{
  chats: Type.ApiChat[]
  offset: number
  limit: number}
>({
  method: 'GET',
  url: `/chat/message/${roomUuid}?offset=${offset}&limit=${limit}`,
})

export const makeRoomRequest = (args: Type.InviteUser[]) => Axios<Pick<Models.Room, 'uuid'>>({
  method: 'POST',
  url: '/chat/room',
  data: { args },
})
