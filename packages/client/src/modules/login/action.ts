import { AxiosError } from 'axios'

export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS' as const
export const LOGIN_FAILURE = 'login/LOGIN_FAILURE' as const
export const LOGOUT_ACTION = 'login/LOGOUT_ACTION' as const
export const loginSuccess = () => ({ type: LOGIN_SUCCESS })
export const loginFailure = (e: AxiosError) => ({
  type: LOGIN_FAILURE,
  payload: e,
})
export const logoutAction = () => ({ type: LOGOUT_ACTION })
