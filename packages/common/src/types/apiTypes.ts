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

export interface Room
  extends Pick<T.Room, 'uuid' | 'createdAt' | 'updatedAt' | 'lastMessage'> {
  participants: {
    uuid: string
    name: string
    statusMessage: string
    email: string
  }[]
}
