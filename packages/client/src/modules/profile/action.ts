import { Models } from '@kakio/common'

type UserState = Pick<Models.User, 'uuid' | 'email' | 'statusMessage' | 'name'>

export const INIT_PROFILE = 'profile/INIT_PROFILE' as const
export const GET_PROFILE = 'profile/GET_PROFILE' as const
export const GET_PROFILE_SUCCESS = 'profile/GET_PROFILE_SUCCESS' as const
export const UPDATE_PROFILE = 'profile/UPDATE_PROFILE' as const
export const UPDATE_PROFILE_SUCCESS = 'profile/UPDATE_PROFILE_SUCCESS' as const

export const getProfile = () => ({ type: GET_PROFILE })
export const getProfileSuccess = (profile: Models.User) => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
})

export const initProfile = (profile: Models.User) => ({
  type: INIT_PROFILE,
  payload: profile,
})

export const updateProfile = (profile: {
  name: string;
  statusMessage: string;
}) => ({
  type: UPDATE_PROFILE,
  payload: profile,
})
export const updateProfielSuccess = (profile: Models.User) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: profile,
})

