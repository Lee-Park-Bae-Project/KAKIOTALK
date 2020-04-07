export const INIT_USER = 'friends/INIT_USER' as const;
export const ADD_USER = 'friends/ADD_USER' as const;
export const REMOVE_USER = 'friends/REMOVE_USER' as const;

export const initFriends = (friend: any) => ({
  type: INIT_USER,
  payload: friend,
});
export const addFriends = (newFriend: any) => ({
  type: ADD_USER,
  payload: newFriend,
});

export const removeFriend = (id: string) => ({
  type: REMOVE_USER,
  payload: id,
});
