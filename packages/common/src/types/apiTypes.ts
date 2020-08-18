import * as T from './modelTypes'

export interface GetFirstChat extends T.Chat {}

export interface LeaveRoom {
  deletedNum: number
  roomUuid: string
  userUuid: string
}

export interface Profile
  extends Pick<
    T.User,
    'uuid' | 'email' | 'name' | 'statusMessage' | 'imageUrl'
  > {}

export interface Friend
  extends Pick<
    T.User,
    'uuid' | 'email' | 'name' | 'statusMessage' | 'imageUrl'
  > {}

export interface GetRoom {
  uuid: string
  createdAt: string
  updatedAt: string
  lastMessage: string | null
  participants: {
    uuid: string
    name: string
    statusMessage: string
    email: string
  }[]
}
