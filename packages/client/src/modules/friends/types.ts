import {
  addFriend,
  addFriendSuccess,
  deleteFriend,
  deleteFriendSuccess,
  getFriends,
  getFriendsSuccess,
} from 'modules/friends/action'

export type UserListAction =
| ReturnType<typeof addFriend>
| ReturnType<typeof deleteFriend>
| ReturnType<typeof getFriends>
| ReturnType<typeof getFriendsSuccess>
| ReturnType<typeof addFriendSuccess>
| ReturnType<typeof deleteFriendSuccess>
| any
