import {
  addFriends,
  removeFriend,
  getFriends,
  getFriendsFailure,
  getFriendsSuccess
} from 'modules/friends/action';

export type UserListAction =
  | ReturnType<typeof addFriends>
  | ReturnType<typeof removeFriend>
  | ReturnType<typeof getFriends>
  | ReturnType<typeof getFriendsFailure>
  | ReturnType<typeof getFriendsSuccess>;
