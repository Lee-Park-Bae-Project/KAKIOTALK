import * as Action from 'modules/login/action'
import { LoginInfo } from 'types'
import { LoginAction } from 'modules/login/types'

const initialState: LoginInfo = { isLoggedIn: false }

function login(state: LoginInfo = initialState, action: LoginAction) {
  switch (action.type) {
    case Action.LOGIN_SUCCESS: {
      return { isLoggedIn: true }
    }
    case Action.LOGIN_FAILURE: {
      return initialState
    }
    case Action.LOGOUT_REQUEST: {
      return { isLoggedIn: false }
    }
    default:
      return state
  }
}

export default login
