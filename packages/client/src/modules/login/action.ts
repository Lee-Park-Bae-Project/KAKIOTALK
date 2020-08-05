import { AxiosError } from 'axios'

export const LOGIN_REQUEST = 'login/LOGIN_REQUEST' as const
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS' as const
export const LOGIN_FAILURE = 'login/LOGIN_FAILURE' as const
export const LOGOUT_REQUEST = 'login/LOGOUT_REQUEST' as const
export const LOGOUT_SUCCESS = 'login/LOGOUT_SUCCESS' as const
export const LOGOUT_FAILURE = 'login/LOGOUT_FAILURE' as const
interface LoginUserType {
  googleId: string,
  email: string,
  name: string,
  googleAccessToken: string,
  imageUrl: string,
}
export const loginRequest = (loginUser: LoginUserType) => ({
  type: LOGIN_REQUEST, payload: loginUser,
})
export const loginSuccess = () => ({ type: LOGIN_SUCCESS })
export const loginFailure = (e: AxiosError) => ({
  type: LOGIN_FAILURE,
  payload: e,
})
export const logoutRequest = () => ({ type: LOGOUT_REQUEST })
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })
export const logoutFailure = () => ({ type: LOGOUT_FAILURE })

