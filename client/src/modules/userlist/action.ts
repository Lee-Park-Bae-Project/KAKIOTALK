export const ADD_USER = 'userlist/ADD_USER' as const;
export const REMOVE_USER = 'userlist/REMOVE_USER' as const;

export const addUser = (newUser: any) => ({
  type: ADD_USER,
  payload: newUser,
});

export const removeUser = (id: string) => ({
  type: REMOVE_USER,
  payload: id,
});
