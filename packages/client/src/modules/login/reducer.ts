import * as Action from 'modules/login/action'
import { LoginInfo } from 'types'
import { LoginAction } from 'modules/login/types'
import { push } from 'common/utils'
import { url } from 'common/constants'

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
    case Action.GOOGLE_LOGIN_SUCCESS: {
      push(url.main.friendList)
      return { isLoggedIn: true }
    }
    default:
      return state
  }
}

export default login
