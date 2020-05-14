import {
  GET_ROOM_REQUEST,
  GET_ROOM_SUCCESS,
  GET_ROOM_FAILURE,
} from 'modules/room/action';

import { Room } from 'types';

import {
  RoomAction,
} from 'modules/room/types';

interface InitialState {
  isLoading: boolean;
  data: Room[];
}
const initialState: InitialState = {
  isLoading: false,
  data: [],
};
const room = (state: InitialState = initialState, action: RoomAction) => {
  switch (action.type) {
    case GET_ROOM_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ROOM_SUCCESS: {
      return {
        ...action.payload,
        isLoading: false,
      };
    }
    case GET_ROOM_FAILURE: {
      return initialState;
    }
    default: return state;
  }
};

export default room;
