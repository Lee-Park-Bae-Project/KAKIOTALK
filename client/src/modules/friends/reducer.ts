import {
  INIT_USER,
  ADD_USER,
  REMOVE_USER,
} from 'modules/friends/action';

import {
  User,
  UserListAction,
} from 'modules/friends/types';

const initialState: User[] = [];

function userList(state: User[] = initialState, action: UserListAction) {
  switch (action.type) {
    case INIT_USER: {
      return action.payload;
    }
    case ADD_USER: {
      return state.concat(action.payload);
    }
    case REMOVE_USER: {
      const newState = state.filter((user) => user.id !== action.payload);
      return newState;
    }
    default:
      return state;
  }
}


export default userList;
