import { all } from 'redux-saga/effects'
import profileSaga from 'modules/sagas/profileSaga'
import friendsSaga from 'modules/sagas/friendsSaga'
import roomSaga from 'modules/sagas/roomSaga'
import chatSaga from 'modules/sagas/chatSaga'
import loginSaga from 'modules/sagas/loginSaga'
import socketSaga from 'modules/sagas/socketSaga'

export default function* rootSaga() {
  yield all([
    profileSaga(),
    friendsSaga(),
    roomSaga(),
    chatSaga(),
    loginSaga(),
    socketSaga(),
  ])
}
