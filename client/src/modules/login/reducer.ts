import {
  GET_LOGIN,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE
} from 'modules/login/action';
import { Profile } from 'types';
import { LoginAction } from 'modules/login/types';

const initialState: Profile[] = [];

function userLogin(state: Profile[] = initialState, action: LoginAction) {
  switch (action.type) {
    case GET_LOGIN: {
      return state.concat(action.payload);
    }
    case GET_LOGIN_SUCCESS: {
      return action.payload;
    }
    case GET_LOGIN_FAILURE: {
      const error = action.payload;
      if (error.response) {
        alert(error.response.data.message);
      }
    }
    default:
      return state;
  }
}

export default userLogin;
