import { AxiosError } from 'axios';
import { Profile } from 'types';
export const GET_LOGIN = 'login/GET_LOGIN' as const;
export const GET_LOGIN_SUCCESS = 'login/LOGIN_SUCCESS' as const;
export const GET_LOGIN_FAILURE = 'login/LOGIN_FAILURE' as const;

export const getLogin = (loginUser: Profile) => ({
  type: GET_LOGIN,
  payload: loginUser
});
export const getLoginSuccess = (token: Object) => ({
  type: GET_LOGIN_SUCCESS,
  payload: token
});
export const getLoginFailure = (e: AxiosError) => ({
  type: GET_LOGIN_FAILURE,
  payload: e
});
