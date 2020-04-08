import {
  initProfile, getProfile, getProfileFailure, getProfileSuccess,
} from 'modules/profile/action';

export type ProfileAction =
| ReturnType<typeof initProfile>
| ReturnType<typeof getProfile>
| ReturnType<typeof getProfileSuccess>
| ReturnType<typeof getProfileFailure>

export interface Profile {
  id: string;
  userName: string;
  statusMessage: string;
}
