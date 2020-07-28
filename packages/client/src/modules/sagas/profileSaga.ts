import {
  call, put, takeEvery,
} from 'redux-saga/effects'
import * as Action from 'modules/profile/action'
import * as request from 'common/request'
import { alert } from 'common/utils'

function* getProfileSaga() {
  try {
    const response = yield call(request.getProfile)
    yield put(Action.getProfileSuccess(response.data.data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}

function* updateProfileSaga({ payload }: ReturnType<typeof Action.updateProfileRequest>) {
  try {
    const response = yield call(request.updateProfile, payload)
    yield put(Action.updateProfielSuccess(response.data.data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
export default function* profileSaga() {
  yield takeEvery(Action.GET_PROFILE_REQUEST, getProfileSaga)
  yield takeEvery(Action.UPDATE_PROFILE_REQUEST, updateProfileSaga)
}
