import {
  initFriends,
  addFriends,
  removeFriend,
} from 'modules/friends/action';

export type UserListAction =
| ReturnType<typeof initFriends>
| ReturnType<typeof addFriends>
| ReturnType<typeof removeFriend>

export interface User {
  id: string;
  userName: string;
  statusMessage: string;
}
