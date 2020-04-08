import {
  INIT_PROFILE, GET_PROFILE, GET_PROFILE_FAILURE, GET_PROFILE_SUCCESS,
} from 'modules/profile/action';
import { Profile, ProfileAction } from 'modules/profile/types';

const initialState: Profile = {
  id: '',
  statusMessage: '',
  userName: '',
};

const profile = (state: Profile = initialState, action: ProfileAction) => {
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
