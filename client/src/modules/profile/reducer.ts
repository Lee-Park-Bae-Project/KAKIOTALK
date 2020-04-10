import {
  INIT_PROFILE, GET_PROFILE, GET_PROFILE_FAILURE, GET_PROFILE_SUCCESS,
} from 'modules/profile/action';
import { ProfileAction } from 'modules/profile/types';
import { User } from 'types';

const initialState: User = {
  id: '',
  statusMessage: '',
  userName: '',
};

const profile = (state: User = initialState, action: ProfileAction) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS: {
      return action.payload;
    }
    case GET_PROFILE_FAILURE: {
      alert(action.payload);
      return state;
    }

    case INIT_PROFILE: return action.payload;

    default: return state;
  }
};

export default profile;
