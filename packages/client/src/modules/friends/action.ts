import { ApiUser } from 'types'
import { ApiTypes } from '@kakio/common'

export const GET_FRIENDS_REQUEST = 'friends/GET_FRIENDS_REQUEST' as const
export const GET_FRIENDS_SUCCESS = 'friends/GET_FRIENDS_SUCCESS' as const
export const ADD_FRIEND_REQUEST = 'friends/ADD_FRIEND' as const
export const ADD_FRIEND_SUCCESS = 'friends/ADD_FRIEND_SUCCESS'
export const DELETE_FRIEND_REQUEST = 'friends/DELETE_FRIEND' as const
export const DELETE_FRIEND_SUCCESS = 'friends/DELETE_FRIEND_SUCCESS' as const

export const RESET_FRIENDS = 'friends/RESET_FRIENDS' as const
export const getFriends = () => ({ type: GET_FRIENDS_REQUEST })
export const getFriendsSuccess = (friends: ApiTypes.Friend[]) => ({
  type: GET_FRIENDS_SUCCESS,
  payload: friends,
})

export const addFriend = (email: string) => ({
  type: ADD_FRIEND_REQUEST,
  payload: email,
})
export const addFriendSuccess = (newFriend: ApiUser) => ({
  type: ADD_FRIEND_SUCCESS,
  payload: newFriend,
})

export const deleteFriend = (uuid: string) => ({
  type: DELETE_FRIEND_REQUEST,
  payload: uuid,
})
export const deleteFriendSuccess = (uuid: string) => ({
  type: DELETE_FRIEND_SUCCESS,
  payload: uuid,
})
export const resetFriends = () => ({ type: RESET_FRIENDS })
