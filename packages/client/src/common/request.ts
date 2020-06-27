import axios, {
  AxiosRequestConfig, AxiosResponse,
} from 'axios'
import * as Type from 'types'
import { Room } from '@kakio/common'
// import Room from 'system/Room'
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

export type ApiCallback<T = {}> = (
  err: AxiosResponse<ResponseType<T>> | null,
  response?: AxiosResponse<ResponseType<T>>,
) => void

async function Axios<T>(config: AxiosRequestConfig) {
  return instance.request<ResponseType<T>>(config)
}

export const getProfile = () => Axios({
  method: 'GET',
  url: 'user/my-profile',
})
export const getFriendList = () => Axios({
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

export const getRooms = () => Axios<Pick<Room, 'uuid' | 'participants'>[]>({
  method: 'GET',
  url: 'chat/room',
})

export const addFriend = (email: string) => Axios({
  method: 'POST',
  url: 'social/add-friend',
  data: { email },
})

export const deleteFriend = (uuid: string) => Axios({
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
}) => Axios({
  method: 'PATCH',
  url: 'user/update-profile',
  data: {
    name, statusMessage,
  },
})

export const getChatByRoom = (roomUuid: string) => Axios<Type.ApiChat[]>({
  method: 'GET',
  url: `/chat/message/${roomUuid}`,
})

export const makeRoom = (inviteUser: Type.InviteUser) => Axios<string>({
  method: 'POST',
  url: '/chat/makeRoom',
  data: { inviteUser },
})
