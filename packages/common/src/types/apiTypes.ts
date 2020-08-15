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
