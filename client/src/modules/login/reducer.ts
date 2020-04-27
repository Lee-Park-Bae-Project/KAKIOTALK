import {
  LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE
} from 'modules/login/action';
import { Profile, loginInfo } from 'types';
import { LoginAction } from 'modules/login/types';

const initialState: loginInfo[] = [];

function userLogin(state: loginInfo[] = initialState, action: LoginAction) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      const isLogin: loginInfo = {
        loginToken: action.payload,
        isLoggedIn: true
      };
      return state.concat(isLogin);
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
