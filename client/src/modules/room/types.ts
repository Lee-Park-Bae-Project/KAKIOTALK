import {
  getRoomRequest,
  getRoomSuccess,
  getRoomFailure,
} from 'modules/room/action';

export type RoomAction =
| ReturnType<typeof getRoomRequest>
| ReturnType<typeof getRoomSuccess>
| ReturnType<typeof getRoomFailure>
