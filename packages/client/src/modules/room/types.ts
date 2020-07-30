import {
  getRoomFailure,
  getRoomRequest,
  getRoomSuccess,

  makeRoomRequest,

} from 'modules/room/action'
import { Models } from '@kakio/common'

export interface RoomState {
  isLoading: boolean;
  data: Omit<Models.Room, 'id'>[];
}

export type RoomAction =
| ReturnType<typeof getRoomRequest>
| ReturnType<typeof getRoomSuccess>
| ReturnType<typeof getRoomFailure>
| ReturnType<typeof makeRoomRequest>

