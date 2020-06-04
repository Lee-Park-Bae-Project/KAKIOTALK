import {
  getRoomFailure,
  getRoomRequest,
  getRoomSuccess,
} from 'modules/room/action'
import { Room } from '@kakio/common'

export interface RoomState {
  isLoading: boolean;
  data: Omit<Room, 'id'>[];
}

export type RoomAction =
| ReturnType<typeof getRoomRequest>
| ReturnType<typeof getRoomSuccess>
| ReturnType<typeof getRoomFailure>
