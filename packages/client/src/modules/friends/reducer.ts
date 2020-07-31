import * as Action from 'modules/friends/action'
import { UserListAction } from 'modules/friends/types'
import { SimpleUserType } from 'types'

const initialState: SimpleUserType[] = []

function userList(state: SimpleUserType[] = initialState, action: UserListAction) {
  switch (action.type) {
    case Action.DELETE_FRIEND_SUCCESS: {
      return state.filter((user) => user.uuid !== action.payload)
    }

    case Action.GET_FRIENDS_SUCCESS: {
      return action.payload
    }

    case Action.ADD_FRIEND_SUCCESS: {
      return state.concat(action.payload)
    }

    case Action.RESET_FRIENDS: {
      return initialState
    }
    default:
      return state
  }
}

export default userList
