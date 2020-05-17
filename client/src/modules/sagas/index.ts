import { all } from 'redux-saga/effects';
import profileSaga from 'modules/sagas/profileSaga';
import friendsSaga from 'modules/sagas/friendsSaga';
import roomSaga from 'modules/sagas/roomSaga';

export default function* rootSaga() {
  yield all([
    profileSaga(),
    friendsSaga(),
    roomSaga(),
  ]);
}
