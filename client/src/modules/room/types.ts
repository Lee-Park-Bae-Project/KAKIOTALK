import {
  getRoomRequest,
  getRoomSuccess,
  getRoomFailure,
} from 'modules/room/action';
import { IRoom } from 'types';

export interface RoomState {
  isLoading: boolean;
  data: IRoom[];
}

export type RoomAction =
| ReturnType<typeof getRoomRequest>
| ReturnType<typeof getRoomSuccess>
| ReturnType<typeof getRoomFailure>
