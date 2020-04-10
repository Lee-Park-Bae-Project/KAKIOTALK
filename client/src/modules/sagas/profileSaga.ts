import {
  put, takeEvery, call,
} from 'redux-saga/effects';
import {
  GET_PROFILE,
  getProfileFailure,
  getProfileSuccess,
} from 'modules/profile/action';

import request from 'common/request';

function* getProfileSaga() {
  try {
    const response = yield call(request.getProfile);
    yield put(getProfileSuccess(response.data.data));
  } catch (e) {
    yield put(getProfileFailure(e));
  }
}

export default function* profileSaga() {
  yield takeEvery(GET_PROFILE, getProfileSaga);
}
