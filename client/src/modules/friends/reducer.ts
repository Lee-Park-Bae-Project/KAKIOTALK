import {
  REMOVE_FRIEND_SUCCESS,
  REMOVE_FRIEND_FAILURE,
  GET_FRIENDS_FAILURE,
  GET_FRIENDS_SUCCESS,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
} from 'modules/friends/action';
import { User } from 'types';
import {
  UserListAction,
} from 'modules/friends/types';
import swal from 'sweetalert'
const initialState: User[] = [];

function userList(state: User[] = initialState, action: UserListAction) {
  switch (action.type) {
    case REMOVE_FRIEND_SUCCESS: {
      swal('삭제되었습니다.',"","success")
      const newState = state.filter((user) => user.id !== action.payload.googleId);
      return newState;
    }
    case REMOVE_FRIEND_FAILURE: {
      const error = action.payload
      if (error.response) {
        swal(error.response.data.message,"","error");
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
      swal(`${action.payload.userName}님을 친구로 추가했습니다.`,"","success")
      return state.concat(action.payload);
    }
    case ADD_FRIEND_FAILURE: {
      const error = action.payload;
      if(error.response) {
        swal(error.response.data.message,"","error");
      }
    }
    default:
      return state;
  }
}


export default userList;
