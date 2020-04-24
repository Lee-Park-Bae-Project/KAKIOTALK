import { all } from 'redux-saga/effects';
import profileSaga from 'modules/sagas/profileSaga';
import friendsSaga from 'modules/sagas/friendsSaga';
import chatRoomSaga from 'modules/sagas/chatRoomSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
  yield all([profileSaga(), friendsSaga(), chatRoomSaga(), loginSaga()]);
}
