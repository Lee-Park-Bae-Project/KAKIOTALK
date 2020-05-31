import { put, takeEvery, call } from 'redux-saga/effects';
import {
  GET_PROFILE,
  getProfileFailure,
  getProfileSuccess,
  UPDATE_PROFILE,
  updateProfielSuccess,
  updateProfileFailure,
} from 'modules/profile/action';
import request from 'common/request';
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

function* updateProfileSaga({ payload }: any) {
  try {
    const response = yield call(request.updateProfile, payload);
    yield put(updateProfielSuccess(response.data.data));
  } catch (e) {
    alert.error(e.response.data.data.message);
    yield put(updateProfileFailure(e));
  }
}
export default function* profileSaga() {
  yield takeEvery(GET_PROFILE, getProfileSaga);
  yield takeEvery(UPDATE_PROFILE, updateProfileSaga);
}
