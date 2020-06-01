import { LOGIN_SUCCESS, LOGIN_FAILURE } from 'modules/login/action';
import { loginInfo } from 'types';
import { LoginAction } from 'modules/login/types';
import { alert } from 'common/utils';
const initialState: loginInfo = {
  isLoggedIn: false,
};

function login(state: loginInfo = initialState, action: LoginAction) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        isLoggedIn: true,
      };
    }
    case LOGIN_FAILURE: {
      const error = action.payload;
      if (error.response) {
        console.log(error.response);
        alert.error(error.response.data.data.message);
      }
    }
    default:
      return state;
  }
}

export default login;
