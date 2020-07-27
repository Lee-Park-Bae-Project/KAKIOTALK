import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import friends from 'modules/friends'
import profile from 'modules/profile'
import login, { LoginAction, LOGOUT_REQUEST } from 'modules/login'
import room from 'modules/room'
import chat from 'modules/chat'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],

}
const appReducer = combineReducers({
  friends,
  profile,
  login,
  room,
  chat,
})

const rootReducer = (state: any, action: LoginAction) => {
  if (action.type === LOGOUT_REQUEST) {
    state = undefined
  }
  return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
