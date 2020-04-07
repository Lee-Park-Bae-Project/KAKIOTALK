import { INIT_PROFILE } from 'modules/profile/action';
import { Profile, ProfileAction } from 'modules/profile/types';

const initialState: Profile = {
  id: '',
  statusMessage: '',
  userName: '',
};

const profile = (state: Profile = initialState, action: ProfileAction) => {
  switch (action.type) {
    case INIT_PROFILE: {
      return action.payload;
    }
    default: return state;
  }
};

export default profile;
