import {
  ADD_FRIEND_SUCCESS,
  DELETE_FRIEND_SUCCESS,
  GET_FRIENDS_SUCCESS,
} from 'modules/friends/action'
import { UserListAction } from 'modules/friends/types'
import { SimpleUserType } from 'types'

const initialState: SimpleUserType[] = []

function userList(state: SimpleUserType[] = initialState, action: UserListAction) {
  switch (action.type) {
    case DELETE_FRIEND_SUCCESS: {
      return state.filter((user) => user.uuid !== action.payload)
    }

    case GET_FRIENDS_SUCCESS: {
      return action.payload
    }

    case ADD_FRIEND_SUCCESS: {
      return state.concat(action.payload)
    }
    default:
      return state
  }
}

export default userList
