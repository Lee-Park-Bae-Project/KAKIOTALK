import { put, takeEvery, call } from 'redux-saga/effects';

import {
  GET_LOGIN,
  getLoginSuccess,
  getLoginFailure
} from 'modules/login/action';
import request from 'common/request';

function* getLoginSaga() {
  try {
    const response = yield call(request.getLogin);
    yield put(getLoginSuccess(response.data.token));
  } catch (e) {
    yield put(getLoginFailure(e));
  }
}

export default function* loginSaga() {
  yield takeEvery(GET_LOGIN, getLoginSaga);
}
