import * as Action from 'modules/room/action'
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
    case Action.GET_ROOM_REQUEST: {
      return {
        isLoading: true,
        data: state.data,
      }
    }
    case Action.GET_ROOM_SUCCESS: {
      return {
        isLoading: false,
        data: action.payload,
      }
    }
    case Action.GET_ROOM_FAILURE: {
      return initialState
    }
    case Action.RESET_ROOM: {
      return initialState
    }
    case Action.MAKE_ROOM_REQUEST: {
      return {
        isLoading: true,
        data: state.data,
      }
    }

    case Action.LEAVE_ROOM_SUCCESS: {
      const { roomUuid } = action.payload
      return {
        isLoading: true,
        data: state.data.filter((v) => v.uuid !== roomUuid),
      }
    }
    case Action.GET_NEW_MESSAGE: {
      const {
        roomUuid, content, updatedAt,
      } = action.payload
      const updatedData = state.data.map((_room) => {
        if (_room.uuid === roomUuid) {
          const {
            uuid, createdAt, participants,
          } = _room
          const updatedRoom = {
            uuid,
            createdAt,
            participants,
            lastMessage: content,
            updatedAt,
          }
          return updatedRoom
        }
        return _room
      })
      return {
        isLoading: false,
        data: updatedData,
      }
    }

    default: return state
  }
}

export default room
