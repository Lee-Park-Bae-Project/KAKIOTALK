import {
  call, put, takeEvery,
} from 'redux-saga/effects'
import {
  GET_PROFILE,
  getProfileSuccess,
  UPDATE_PROFILE,
  updateProfielSuccess,
  updateProfile,
} from 'modules/profile/action'
import * as request from 'common/request'
import { alert } from 'common/utils'

function* getProfileSaga() {
  try {
    const response = yield call(request.getProfile)
    yield put(getProfileSuccess(response.data.data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}

function* updateProfileSaga({ payload }: ReturnType<typeof updateProfile>) {
  try {
    const response = yield call(request.updateProfile, payload)
    yield put(updateProfielSuccess(response.data.data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
export default function* profileSaga() {
  yield takeEvery(GET_PROFILE, getProfileSaga)
  yield takeEvery(UPDATE_PROFILE, updateProfileSaga)
}
