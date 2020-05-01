import { put, takeEvery, call } from 'redux-saga/effects';
import {
  loginRequest,
  getLoginSuccess,
  getLoginFailure,
  LOGIN_REQUEST
} from 'modules/login/action';
import axios from 'axios';
import request from 'common/request';
import { Profile, loginInfo } from 'types/index';

function* getLoginSaga(payload: any) {
  try {
    console.log(payload);
    const response = yield call(() =>
      request.getLogin(payload.email, payload.name, payload.googleId)
    );
    yield put(getLoginSuccess(response));
  } catch (e) {
    yield put(getLoginFailure(e));
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, getLoginSaga);
}
