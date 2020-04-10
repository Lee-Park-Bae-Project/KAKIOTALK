import { all } from 'redux-saga/effects';
import profileSaga from 'modules/sagas/profileSaga';
import friendsSaga from 'modules/sagas/friendsSaga';
import chatRoomSaga from 'modules/sagas/chatRoomSaga';

export default function* rootSaga() {
  yield all([
    profileSaga(),
    friendsSaga(),
    chatRoomSaga(),
  ]);
}
