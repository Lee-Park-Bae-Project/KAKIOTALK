import { combineReducers } from 'redux';
import userList from 'modules/userlist';
import chatRoomList from 'modules/ChatRoomList';

const rootReducer = combineReducers({
  userList,
  chatRoomList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
