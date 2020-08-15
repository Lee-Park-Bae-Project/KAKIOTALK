import {
  call, put, takeEvery,
} from 'redux-saga/effects'
import * as Action from 'modules/profile/action'
import * as request from 'common/request'
import { unwrapPromise } from 'types'
import * as AlertAction from 'modules/alert'

function* getProfileSaga() {
  try {
    const data: unwrapPromise<typeof request.getProfile> = yield call(request.getProfile)
    yield put(Action.getProfileSuccess(data))
  } catch (e) {
    yield put(AlertAction.error(e.message))
  }
}

function* updateProfileSaga({ payload }: ReturnType<typeof Action.updateProfileRequest>) {
  try {
    const data: unwrapPromise<typeof request.updateProfile> = yield call(request.updateProfile, payload)
    yield put(Action.updateProfielSuccess(data))
  } catch (e) {
    yield put(AlertAction.error(e.message))
  }
}
export default function* profileSaga() {
  yield takeEvery(Action.GET_PROFILE_REQUEST, getProfileSaga)
  yield takeEvery(Action.UPDATE_PROFILE_REQUEST, updateProfileSaga)
}
