import {
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  GET_FRIENDS_FAILURE,
  GET_FRIENDS_SUCCESS,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
} from 'modules/friends/action';
import { User } from 'types';
import {
  UserListAction,
} from 'modules/friends/types';
const initialState: User[] = [];

function userList(state: User[] = initialState, action: UserListAction) {
  switch (action.type) {
    case DELETE_FRIEND_SUCCESS: {
      return state.filter((user) => user.id !== action.payload.googleId);
    }
    case DELETE_FRIEND_FAILURE: {
      const error = action.payload
      if (error.response) {
      }
      return state;
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
    case ADD_FRIEND_SUCCESS: {
      return state.concat(action.payload);
    }
    case ADD_FRIEND_FAILURE: {
      const error = action.payload;
      if(error.response) {
      }
    }
    default:
      return state;
  }
}


export default userList;
