import * as Action from 'modules/login/action'

export type LoginAction =
  | ReturnType<typeof Action.loginSuccess>
  | ReturnType<typeof Action.loginFailure>
  | ReturnType<typeof Action.logoutRequest>
  | ReturnType<typeof Action.loginRequest>
