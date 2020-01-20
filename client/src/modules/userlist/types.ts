import {
  addUser,
  removeUser,
} from 'modules/userlist/action';

export type UserListAction =
| ReturnType<typeof addUser>
| ReturnType<typeof removeUser>

export interface User {
  id: string;
  userName: string;
  statusMessage: string;
}
