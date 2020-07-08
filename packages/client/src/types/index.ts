import { Models } from '@kakio/common'

export interface LoginInfo {
  isLoggedIn: boolean;
}

export interface ApiChat extends Pick<Models.Chat, 'uuid' | 'content' | 'createdAt' | 'updatedAt'> {
  metaInfo: {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    sender: Models.User;
    room: {
      uuid: string;
      createdAt: string;
      updatedAt: string;
    }
  },
}
export type ReduxState<T> = {
  isLoading: boolean;
  data: T;
}

export type ReduxChat = {
  chats: ApiChat[]
  offset: number
  limit: number
}

export type ReduxChatMap = {
  [key: string]: ReduxChat
}

export type SimpleUserType = Pick<Models.User, 'uuid'| 'name' | 'email' | 'statusMessage' | 'imageUrl'>

export interface ApiUser extends SimpleUserType {
  uuid: string;
  name: string;
  email: string;
  statusMessge: string;
  imageUrl: string;
}
export type InviteUserType = Pick<Models.User, 'uuid' | 'name'>
export interface InviteUser extends InviteUserType{
  uuid: string;
  name: string;
}
