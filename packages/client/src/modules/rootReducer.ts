import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import friends from 'modules/friends'
import profile from 'modules/profile'
import login from 'modules/login'
import room from 'modules/room'
import chat from 'modules/chat'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],

}
const rootReducer = combineReducers({
  friends,
  profile,
  login,
  room,
  chat,
})

export default persistReducer(persistConfig, rootReducer)
