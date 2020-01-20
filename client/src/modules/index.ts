import { combineReducers } from 'redux';
import userList from 'modules/userlist';

const rootReducer = combineReducers({
  userList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
