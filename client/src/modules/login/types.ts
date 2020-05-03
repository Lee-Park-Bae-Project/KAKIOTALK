import {
  loginRequest,
  getLoginSuccess,
  getLoginFailure
} from 'modules/login/action';

export type LoginAction =
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof getLoginSuccess>
  | ReturnType<typeof getLoginFailure>;
