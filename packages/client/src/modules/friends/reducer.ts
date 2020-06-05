import {
  ADD_FRIEND_FAILURE,
  ADD_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  DELETE_FRIEND_SUCCESS,
  GET_FRIENDS_FAILURE,
  GET_FRIENDS_SUCCESS,
} from 'modules/friends/action'
import { User } from '@kakio/common'
import { UserListAction } from 'modules/friends/types'

const initialState: User[] = []

const userList = (state: User[] = initialState, action: UserListAction) => {
  switch (action.type) {
    case DELETE_FRIEND_SUCCESS: {
      return state.filter((user) => user.uuid !== action.payload.uuid)
    }
    case DELETE_FRIEND_FAILURE: {
      const error = action.payload
      if (error.response) { console.warn(error.response) }
      return state
    }
    case GET_FRIENDS_SUCCESS: {
      return action.payload
    }
    case GET_FRIENDS_FAILURE: {
      // const error = action.payload;
      return initialState
    }
    case ADD_FRIEND_SUCCESS: {
      return state.concat(action.payload)
    }
    case ADD_FRIEND_FAILURE: {
      // const error = action.payload;
      return state
    }
    default:
      return state
  }
}

export default userList
