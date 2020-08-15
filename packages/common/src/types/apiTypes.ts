import * as T from './modelTypes'

export interface GetFirstChat extends T.Chat {}

export interface LeaveRoom {
  deletedNum: number
  roomUuid: string
  userUuid: string
}
