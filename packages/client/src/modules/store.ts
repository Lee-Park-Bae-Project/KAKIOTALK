import { applyMiddleware, createStore } from 'redux'
import rootReducer from 'modules/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'modules/sagas'
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()
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
const persistor = persistStore(store)
export default { store, persistor }
