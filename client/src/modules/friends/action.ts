import { User } from 'types';
import { AxiosError } from 'axios';

export const GET_FRIENDS = 'friends/GET_FRIENDS' as const;
export const GET_FRIENDS_SUCCESS = 'friends/GET_FRIENDS_SUCCESS' as const;
export const GET_FRIENDS_FAILURE = 'friends/GET_FRIENDS_FAILURE' as const;
export const ADD_FRIEND = 'friends/ADD_FRIEND' as const;
export const ADD_FRIEND_SUCCESS = 'friends/ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'friends/ADD_FRIEND_FAILURE';
export const REMOVE_FRIEND = 'friends/REMOVE_FRIEND' as const;
export const REMOVE_FRIEND_SUCCESS = 'friends/REMOVE_FRIEND_SUCCESS' as const;
export const REMOVE_FRIEND_FAILURE = 'friends/REMOVE_FRIEND_FAILURE' as const;


export const getFriends = () => ({
  type: GET_FRIENDS,
});
export const getFriendsSuccess = (friends: User[]) => ({
  type: GET_FRIENDS_SUCCESS,
  payload: friends,
});
export const getFriendsFailure = (e: AxiosError) => ({
  type: GET_FRIENDS_FAILURE,
  payload: e,
});
export const addFriend = (id: string) => ({
  type: ADD_FRIEND,
  payload: id,
});
export const addFriendSuccess = (newFriend: User) => ({
  type: ADD_FRIEND_SUCCESS,
  payload: newFriend,
});
export const addFriendFailure = (e: AxiosError) => ({
  type: ADD_FRIEND_FAILURE,
  payload: e,
});
export const removeFriend = (id: string) => ({
  type: REMOVE_FRIEND,
  payload: id,
});
export const removeFriendSuccess = (id:string)=>({
  type: REMOVE_FRIEND_SUCCESS,
  payload: id
})
export const removeFriendFailure = (e: AxiosError)=>({
  type: REMOVE_FRIEND_FAILURE,
  payload: e,
})
