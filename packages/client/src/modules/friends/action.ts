import { ApiUser } from 'types'

export const GET_FRIENDS = 'friends/GET_FRIENDS' as const
export const GET_FRIENDS_SUCCESS = 'friends/GET_FRIENDS_SUCCESS' as const
export const ADD_FRIEND = 'friends/ADD_FRIEND' as const
export const ADD_FRIEND_SUCCESS = 'friends/ADD_FRIEND_SUCCESS'
export const DELETE_FRIEND = 'friends/DELETE_FRIEND' as const
export const DELETE_FRIEND_SUCCESS = 'friends/DELETE_FRIEND_SUCCESS' as const

export const getFriends = () => ({ type: GET_FRIENDS })
export const getFriendsSuccess = (friends: ApiUser[]) => ({
  type: GET_FRIENDS_SUCCESS,
  payload: friends,
})

export const addFriend = (email: string) => ({
  type: ADD_FRIEND,
  payload: email,
})
export const addFriendSuccess = (newFriend: ApiUser) => ({
  type: ADD_FRIEND_SUCCESS,
  payload: newFriend,
})

export const deleteFriend = (uuid: string) => ({
  type: DELETE_FRIEND,
  payload: uuid,
})
export const deleteFriendSuccess = (uuid: string) => ({
  type: DELETE_FRIEND_SUCCESS,
  payload: uuid,
})

