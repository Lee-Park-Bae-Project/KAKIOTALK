import { combineReducers } from 'redux';
import friends from 'modules/friends';
import chatRoomList from 'modules/chatRoomList';
import profile from 'modules/profile';

const rootReducer = combineReducers({
  friends,
  chatRoomList,
  profile,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
