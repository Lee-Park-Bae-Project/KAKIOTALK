import {
  combineReducers,
  createStore,
  applyMiddleware,
  Store,
  Dispatch,
  Action,
} from 'redux';
import friends from 'modules/friends';
import chatRoomList from 'modules/chatRoom';
import profile from 'modules/profile';
import login from 'modules/login';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'modules/sagas';

const rootReducer = combineReducers({
  friends,
  chatRoomList,
  profile,
  login,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export { store };
