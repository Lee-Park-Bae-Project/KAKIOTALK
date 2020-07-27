import {
  loginFailure, loginRequest, loginSuccess, logoutRequest,
} from 'modules/login/action'

export type LoginAction =
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof logoutRequest>
  | ReturnType<typeof loginRequest>
