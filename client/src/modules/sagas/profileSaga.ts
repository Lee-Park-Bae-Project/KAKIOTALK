import {
  delay, put, takeEvery, call,
} from 'redux-saga/effects';
import {
  GET_PROFILE,
  getProfileFailure,
  getProfileSuccess,
} from 'modules/profile/action';

import { Axios, getProfile } from 'common/request';

function Api() {
  return Axios(getProfile);
}

function* getProfileSaga() {
  try {
    const response = yield call(Api);
    yield put(getProfileSuccess(response.data.data));
  } catch (e) {
    const errorMessage = e.response.data.message;
    yield put(getProfileFailure(errorMessage));
  }
}

export default function* profileSaga() {
  yield takeEvery(GET_PROFILE, getProfileSaga);
}
