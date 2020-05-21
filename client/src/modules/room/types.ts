import {
  getRoomRequest,
  getRoomSuccess,
  getRoomFailure,
} from 'modules/room/action';
import { Room } from 'types';

export interface RoomState {
  isLoading: boolean;
  data: Room[];
}

export type RoomAction =
| ReturnType<typeof getRoomRequest>
| ReturnType<typeof getRoomSuccess>
| ReturnType<typeof getRoomFailure>
