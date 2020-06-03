import { loginSuccess, loginFailure } from 'modules/login/action';

export type LoginAction =
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;
