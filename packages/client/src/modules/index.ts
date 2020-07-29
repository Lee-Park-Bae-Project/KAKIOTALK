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
import { createBrowserHistory } from 'history'

const rootReducer = combineReducers({
  friends,
  profile,
  login,
  room,
  chat,
})
const customHistory = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware({ context: { history: customHistory } })

const middlewares = []
middlewares.push(sagaMiddleware)

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)
sagaMiddleware.run(rootSaga)
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>;
export { store }

