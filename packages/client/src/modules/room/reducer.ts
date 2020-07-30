import * as Action from 'modules/room/action'
import { RoomAction,
  RoomState } from 'modules/room/types'

const initialState: RoomState = { isLoading: false,
  data: [] }
const room = (state: RoomState = initialState, action: RoomAction) => {
  switch (action.type) {
    case Action.GET_ROOM_REQUEST: {
      return { isLoading: true,
        data: state.data }
    }
    case Action.GET_ROOM_SUCCESS: {
      return { isLoading: false,
        data: action.payload }
    }
    case Action.GET_ROOM_FAILURE: {
      return initialState
    }
    case Action.RESET_ROOM: {
      return initialState
    }
    case Action.MAKE_ROOM_REQUEST: {
      return { isLoading: true,
        data: state.data }
    }

    default: return state
  }
}

export default room
