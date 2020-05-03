import {
  LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
} from 'modules/login/action';
import { loginInfo } from 'types';
import { LoginAction } from 'modules/login/types';

const initialState: loginInfo[] = [];

function userLogin(state: loginInfo[] = initialState, action: LoginAction) {
  switch (action.type) {
    case GET_LOGIN_SUCCESS: {
      const user = action.payload;
      return {
        ...user,
        isLoggedIn: true,
      };
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
