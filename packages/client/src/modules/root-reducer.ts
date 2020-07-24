import {
  ActionFromReducer, CombinedState, combineReducers, Reducer,
} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import friends from 'modules/friends'
import profile from 'modules/profile'
import login, { LoginAction, LOGOUT_ACTION } from 'modules/login'
import room from 'modules/room'
import chat from 'modules/chat'
import { RootState } from 'modules'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['friends', 'profile'],
}
const appReducer = combineReducers({
  friends,
  profile,
  login,
  room,
  chat,
})

const rootReducer = (state: any, action: LoginAction) => {
  if (action.type === LOGOUT_ACTION) {
    state = undefined
  }
  return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
