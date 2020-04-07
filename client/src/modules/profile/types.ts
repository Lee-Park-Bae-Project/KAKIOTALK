import { initProfile } from 'modules/profile/action';

export type ProfileAction =
| ReturnType<typeof initProfile>

export interface Profile {
  id: string;
  userName: string;
  statusMessage: string;
}
