import * as Action from 'modules/room/action'
import { Models } from '@kakio/common'

export interface RoomState {
  isLoading: boolean;
  data: Omit<Models.Room, 'id'>[];
}

export type RoomAction =
| ReturnType<typeof Action.getRoomRequest>
| ReturnType<typeof Action.getRoomSuccess>
| ReturnType<typeof Action.getRoomFailure>
| ReturnType<typeof Action.makeRoomRequest>
| ReturnType<typeof Action.resetRoom>

