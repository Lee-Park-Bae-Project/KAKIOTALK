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
import {
  getProfile, resetProfile,
} from 'modules/profile'
import {
  getFriends, resetFriends,
} from 'modules/friends'
import {
  getRoomRequest, resetRoom,
} from 'modules/room'
import * as request from 'common/request'
import * as AlertAction from 'modules/alert'

function* loginRequestSaga({ payload }: ReturnType<typeof loginRequest>) {
  try {
    yield call(request.getLogin, payload)
    yield all([put(loginSuccess()), put(getProfile()), put(getFriends()), put(getRoomRequest())])
  } catch (e) {
    yield put(loginFailure(e))
    yield put(AlertAction.error(e.message))
  }
}

function* logoutRequestSaga() {
  try {
    yield call(request.getLogout)
    yield all([put(logoutSuccess()), put(resetProfile()), put(resetFriends()), put(resetRoom())])
  } catch (e) {
    yield put(AlertAction.error(e.message))
  }
}
export default function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga)
  yield takeLatest(LOGOUT_REQUEST, logoutRequestSaga)
}
