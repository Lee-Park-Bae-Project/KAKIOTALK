import { all } from 'redux-saga/effects';
import profileSaga from 'modules/sagas/profileSaga';

export default function* rootSaga() {
  yield all([profileSaga()]);
}
