import {
  ADD_USER,
  REMOVE_USER,
  GET_FRIENDS_FAILURE,
  GET_FRIENDS_SUCCESS,
} from 'modules/friends/action';
import { User } from 'types';
import {
  UserListAction,
} from 'modules/friends/types';

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
    case GET_FRIENDS_SUCCESS: {
      return action.payload;
    }
    case GET_FRIENDS_FAILURE: {
      const error = action.payload;
      if (error.response) {
        alert(error.response.data.message);
      }
      return state;
    }
    default:
      return state;
  }
}


export default userList;
