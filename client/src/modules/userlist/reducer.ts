import {
  ADD_USER,
  REMOVE_USER,
} from 'modules/userlist/action';

import {
  User,
  UserListAction,
} from 'modules/userlist/types';

const initialState: User[] = [];

function userList(state: User[] = initialState, action: UserListAction) {
  switch (action.type) {
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
