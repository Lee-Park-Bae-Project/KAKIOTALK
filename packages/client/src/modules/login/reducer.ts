import {
  LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_ACTION,
} from 'modules/login/action'
import { LoginInfo } from 'types'
import { LoginAction } from 'modules/login/types'
import { alert } from 'common/utils'

const initialState: LoginInfo = { isLoggedIn: false }

function login(state: LoginInfo = initialState, action: LoginAction) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { isLoggedIn: true }
    }
    case LOGIN_FAILURE: {
      const error = action.payload
      if (error.response) {
        console.error(error.response)
        alert.error(error.response.data.data.message)
      }
      return state
    }
    case LOGOUT_ACTION: {
      return { isLoggedIn: false }
    }
    default:
      return state
  }
}

export default login
