import * as Action from 'modules/room/action'
import {
  ApiTypes, Models,
} from '@kakio/common'

export type RoomData = Omit<Models.Room, 'id'>
export interface RoomState {
  isLoading: boolean
  data: ApiTypes.Room[]
}

export type RoomAction =
| ReturnType<typeof Action.getRoomRequest>
| ReturnType<typeof Action.getRoomSuccess>
| ReturnType<typeof Action.getRoomFailure>
| ReturnType<typeof Action.makeRoomRequest>
| ReturnType<typeof Action.resetRoom>
| ReturnType<typeof Action.leaveRoomSuccess>
| ReturnType<typeof Action.getNewMessage>

