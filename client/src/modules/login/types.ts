import {
  getLogin,
  getLoginSuccess,
  getLoginFailure
} from 'modules/login/action';

export type LoginAction =
  | ReturnType<typeof getLogin>
  | ReturnType<typeof getLoginSuccess>
  | ReturnType<typeof getLoginFailure>;
