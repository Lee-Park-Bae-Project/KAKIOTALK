import { User } from 'types';
import { AxiosError } from 'axios';

export const GET_FRIENDS = 'friends/GET_FRIENDS' as const;
export const GET_FRIENDS_SUCCESS = 'friends/GET_FRIENDS_SUCCESS' as const;
export const GET_FRIENDS_FAILURE = 'friends/GET_FRIENDS_FAILURE' as const;
export const ADD_USER = 'friends/ADD_USER' as const;
export const REMOVE_USER = 'friends/REMOVE_USER' as const;

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
export const addFriends = (newFriend: User) => ({
  type: ADD_USER,
  payload: newFriend,
});

export const removeFriend = (id: string) => ({
  type: REMOVE_USER,
  payload: id,
});
