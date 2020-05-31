import {
  put, takeEvery, call,
} from 'redux-saga/effects';
import {
  GET_PROFILE,
  getProfileFailure,
  getProfileSuccess,
} from 'modules/profile/action';
import * as request from 'common/request';
import { alert } from 'common/utils';

function* getProfileSaga() {
  try {
    const response = yield call(request.getProfile);
    yield put(getProfileSuccess(response.data.data));
  } catch (e) {
    alert.error(e.response.data.data.message);
    yield put(getProfileFailure(e));
  }
}

export default function* profileSaga() {
  yield takeEvery(GET_PROFILE, getProfileSaga);
}
