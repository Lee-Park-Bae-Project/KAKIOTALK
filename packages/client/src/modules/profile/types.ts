import {
  getProfile,
  getProfileFailure,
  getProfileSuccess,
  initProfile,
  updateProfielSuccess,
} from 'modules/profile/action'

export type ProfileAction =
  | ReturnType<typeof initProfile>
  | ReturnType<typeof getProfile>
  | ReturnType<typeof getProfileSuccess>
  | ReturnType<typeof getProfileFailure>
  | ReturnType<typeof updateProfielSuccess>;
