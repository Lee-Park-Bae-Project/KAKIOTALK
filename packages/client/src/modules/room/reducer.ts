import {
  GET_ROOM_FAILURE,
  GET_ROOM_REQUEST,
  GET_ROOM_SUCCESS,
} from 'modules/room/action'
import {
  RoomAction,
  RoomState,
} from 'modules/room/types'

const initialState: RoomState = {
  isLoading: false,
  data: [],
}
const room = (state: RoomState = initialState, action: RoomAction) => {
  switch (action.type) {
    case GET_ROOM_REQUEST: {
      return {
        isLoading: true,
        data: state.data,
      }
    }
    case GET_ROOM_SUCCESS: {
      return {
        isLoading: false,
        data: action.payload,
      }
    }
    case GET_ROOM_FAILURE: {
      return initialState
    }
    default: return state
  }
}

export default room
