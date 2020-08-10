import * as Action from 'modules/login/action'
import { LoginInfo } from 'types'
import { LoginAction } from 'modules/login/types'
import { alert } from 'common/utils'

const initialState: LoginInfo = { isLoggedIn: false }

function login(state: LoginInfo = initialState, action: LoginAction) {
  switch (action.type) {
    case Action.LOGIN_SUCCESS: {
      return { isLoggedIn: true }
    }
    case Action.LOGIN_FAILURE: {
      const error = action.payload
      if (error) {
        console.error(error)
        alert.error(error)
      }
      return state
    }
    case Action.LOGOUT_REQUEST: {
      return { isLoggedIn: false }
    }
    default:
      return state
  }
}

export default login
