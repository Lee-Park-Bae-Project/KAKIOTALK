import { Models } from '@kakio/common'

export const GET_PROFILE_REQUEST = 'profile/GET_PROFILE' as const
export const GET_PROFILE_SUCCESS = 'profile/GET_PROFILE_SUCCESS' as const
export const UPDATE_PROFILE_REQUEST = 'profile/UPDATE_PROFILE' as const
export const UPDATE_PROFILE_SUCCESS = 'profile/UPDATE_PROFILE_SUCCESS' as const
export const RESET_PROFILE = 'profile/RESET_PROFILE' as const
export const getProfile = () => ({ type: GET_PROFILE_REQUEST })
export const getProfileSuccess = (profile: Models.User) => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
})

export const updateProfileRequest = (profile: {
  name: string;
  statusMessage: string;
}) => ({
  type: UPDATE_PROFILE_REQUEST,
  payload: profile,
})
export const updateProfielSuccess = (profile: Models.User) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: profile,
})
export const resetProfile = () => ({ type: RESET_PROFILE })
