import {
  deleteFriend,
  getFriends,
  getFriendsFailure,
  getFriendsSuccess,
  addFriend,
  addFriendFailure,
  addFriendSuccess
} from 'modules/friends/action';

export type UserListAction =
| ReturnType<typeof addFriend>
| ReturnType<typeof deleteFriend>
| ReturnType<typeof getFriends>
| ReturnType<typeof getFriendsFailure>
| ReturnType<typeof getFriendsSuccess>
| ReturnType<typeof addFriendSuccess>
| ReturnType<typeof addFriendFailure>
| any