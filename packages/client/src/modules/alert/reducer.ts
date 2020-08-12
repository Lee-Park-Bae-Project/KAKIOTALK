import * as Action from 'modules/alert/action'
import { AlertType } from 'modules/alert/types'
import { alert } from 'common/utils'

const reducer = (state = {}, action: AlertType) => {
  switch (action.type) {
    case Action.LOGIN_FAILURE: {
      alert.error(action.payload.msg)
      return state
    }
    case Action.ADD_FRIEND: {
      alert.addFriend(action.payload.msg)
      return state
    }
    case Action.DELETE_FRIEND: {
      alert.deleteFriend()
      return state
    }
    case Action.Error: {
      alert.error(action.payload.msg)
      return state
    }
    default: {
      return state
    }
  }
}

export default reducer
