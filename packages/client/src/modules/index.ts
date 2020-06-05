import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import friends from 'modules/friends'
import profile from 'modules/profile'
import login from 'modules/login'
import room from 'modules/room'
import chat from 'modules/chat'

import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'modules/sagas'

const rootReducer = combineReducers({
  friends,
  profile,
  login,
  room,
  chat,
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;
export { store }
