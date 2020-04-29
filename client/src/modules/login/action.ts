import { AxiosError } from 'axios';
import { Profile, loginInfo } from 'types';
export const LOGIN_REQUEST = 'login/GET_LOGIN' as const;
export const GET_LOGIN_SUCCESS = 'login/LOGIN_SUCCESS' as const;
export const GET_LOGIN_FAILURE = 'login/LOGIN_FAILURE' as const;

export const loginRequest = (profile: Profile) => ({
  type: LOGIN_REQUEST,
  payload: profile
});
export const getLoginSuccess = (token: loginInfo) => ({
  type: GET_LOGIN_SUCCESS,
  payload: token
});
export const getLoginFailure = (e: AxiosError) => ({
  type: GET_LOGIN_FAILURE,
  payload: e
});
