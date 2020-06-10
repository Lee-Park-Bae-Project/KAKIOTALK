import {
  loginFailure, loginSuccess, logoutAction,
} from 'modules/login/action'

export type LoginAction =
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof logoutAction>
