import { User } from 'types';
import { AxiosError } from 'axios';

export const INIT_PROFILE = 'profile/INIT_PROFILE' as const;
export const GET_PROFILE = 'profile/GET_PROFILE' as const;
export const GET_PROFILE_SUCCESS = 'profile/GET_PROFILE_SUCCESS' as const;
export const GET_PROFILE_FAILURE = 'profile/GET_PROFILE_FAILURE' as const;

export const getProfile = () => ({
  type: GET_PROFILE,
});
export const getProfileSuccess = (profile: User) => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getProfileFailure = (errorMessage: AxiosError) => ({
  type: GET_PROFILE_FAILURE,
  payload: errorMessage,
});

export const initProfile = (profile: any) => ({
  type: INIT_PROFILE,
  payload: profile,
});
