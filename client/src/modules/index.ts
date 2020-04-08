import { combineReducers, createStore, applyMiddleware } from 'redux';
import friends from 'modules/friends';
import chatRoomList from 'modules/chatRoomList';
import profile from 'modules/profile';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  friends,
  chatRoomList,
  profile,
});
const middlewares = [];
middlewares.push(logger);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export {
  store,
};
