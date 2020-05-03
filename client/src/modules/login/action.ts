import { AxiosError } from 'axios';
import { loginInfo } from 'types';
export const LOGIN_REQUEST = 'login/GET_LOGIN' as const;
export const GET_LOGIN_SUCCESS = 'login/LOGIN_SUCCESS' as const;
export const GET_LOGIN_FAILURE = 'login/LOGIN_FAILURE' as const;

export const loginRequest = (profile: any) => ({
  type: LOGIN_REQUEST,
  payload: profile,
});
export const getLoginSuccess = (user: any) => ({
  type: GET_LOGIN_SUCCESS,
  payload: user,
});
export const getLoginFailure = (e: AxiosError) => ({
  type: GET_LOGIN_FAILURE,
  payload: e,
});
