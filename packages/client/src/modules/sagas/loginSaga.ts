import {
  call, put, takeEvery,
} from 'redux-saga/effects'
import {
  LOGIN_REQUEST,
  loginFailure,
  loginRequest,
  loginSuccess,
} from 'modules/login'
import { getProfile } from 'modules/profile'
import { getFriends } from 'modules/friends'
import { getRoomRequest } from 'modules/room'
import { alert } from 'common/utils'
import * as request from 'common/request'

function* loginRequestSaga({ payload }: ReturnType<typeof loginRequest>) {
  try {
    yield call(request.getLogin, payload)
    yield put(loginSuccess())
    yield put(getProfile())
    yield put(getFriends())
    yield put(getRoomRequest())
  } catch (e) {
    yield put(loginFailure(e))
    alert.error(e.response.data.data.message)
  }
}
export default function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginRequestSaga)
}
