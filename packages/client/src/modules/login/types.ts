import {
  loginFailure, loginSuccess,
} from 'modules/login/action'

export type LoginAction =
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;
