import {
  call, put, takeEvery,
} from 'redux-saga/effects'
import * as Action from 'modules/profile/action'
import * as request from 'common/request'
import { alert } from 'common/utils'
import { unwrapPromise } from 'types'

function* getProfileSaga() {
  try {
    const data: unwrapPromise<typeof request.getProfile> = yield call(request.getProfile)
    yield put(Action.getProfileSuccess(data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}

function* updateProfileSaga({ payload }: ReturnType<typeof Action.updateProfileRequest>) {
  try {
    const data: unwrapPromise<typeof request.updateProfile> = yield call(request.updateProfile, payload)
    yield put(Action.updateProfielSuccess(data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
export default function* profileSaga() {
  yield takeEvery(Action.GET_PROFILE_REQUEST, getProfileSaga)
  yield takeEvery(Action.UPDATE_PROFILE_REQUEST, updateProfileSaga)
}
