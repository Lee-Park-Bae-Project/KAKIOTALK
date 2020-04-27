import { put, takeEvery, call } from 'redux-saga/effects';
import {
  GET_LOGIN,
  getLoginSuccess,
  getLoginFailure,
  getLogin
} from 'modules/login/action';
import axios from 'axios';
import request from 'common/request';

function* getLoginSaga({ payload }: any) {
  const { loginData } = payload;
  try {
    const response = yield call(request.getLogin(loginData));
    console.log(response);
    yield put(getLoginSuccess(response));
  } catch (e) {
    yield put(getLoginFailure(e));
  }
}

export default function* loginSaga() {
  yield takeEvery(GET_LOGIN, getLoginSaga);
}
