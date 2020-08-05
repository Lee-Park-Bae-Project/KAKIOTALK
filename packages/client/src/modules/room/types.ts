import * as Action from 'modules/room/action'
import { Models } from '@kakio/common'

export type RoomData = Omit<Models.Room, 'id'>
export interface RoomState {
  isLoading: boolean
  data: RoomData[]
}

export type RoomAction =
| ReturnType<typeof Action.getRoomRequest>
| ReturnType<typeof Action.getRoomSuccess>
| ReturnType<typeof Action.getRoomFailure>
| ReturnType<typeof Action.makeRoomRequest>
| ReturnType<typeof Action.resetRoom>

