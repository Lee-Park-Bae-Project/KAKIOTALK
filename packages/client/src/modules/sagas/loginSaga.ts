import {
  all, call, put, takeLatest,
} from 'redux-saga/effects'
import {
  LOGIN_REQUEST,
  loginFailure,
  loginRequest,
  loginSuccess,
  LOGOUT_REQUEST,
  logoutSuccess,
} from 'modules/login'
import { getProfile, resetProfile } from 'modules/profile'
import { getFriends, resetFriends } from 'modules/friends'
import { getRoomRequest, resetRoom } from 'modules/room'
import { alert } from 'common/utils'
import * as request from 'common/request'

function* loginRequestSaga({ payload }: ReturnType<typeof loginRequest>) {
  try {
    yield call(request.getLogin, payload)
    yield* [put(loginSuccess()), put(getProfile()), put(getFriends()), put(getRoomRequest())]
  } catch (e) {
    yield put(loginFailure(e))
    alert.error(e.response.data.data.message)
  }
}

function* logoutRequestSaga() {
  try {
    yield call(request.getLogout)
    yield* [put(logoutSuccess()), put(resetProfile()), put(resetFriends()), put(resetRoom())]
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
export default function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga)
  yield takeLatest(LOGOUT_REQUEST, logoutRequestSaga)
}
