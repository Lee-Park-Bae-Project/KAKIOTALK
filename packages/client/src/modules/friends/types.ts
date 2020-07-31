import * as Action from 'modules/friends/action'

export type UserListAction =
| ReturnType<typeof Action.addFriend>
| ReturnType<typeof Action.deleteFriend>
| ReturnType<typeof Action.getFriends>
| ReturnType<typeof Action.getFriendsSuccess>
| ReturnType<typeof Action.addFriendSuccess>
| ReturnType<typeof Action.deleteFriendSuccess>
| ReturnType<typeof Action.resetFriends>
| any
