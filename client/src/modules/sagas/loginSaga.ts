import { put, takeEvery, call } from 'redux-saga/effects';
import {
  loginRequest,
  getLoginSuccess,
  getLoginFailure,
  LOGIN_REQUEST
} from 'modules/login/action';
import axios from 'axios';
import request from 'common/request';
import Profile from 'system/Profile';

function* getLoginSaga({ payload }: any) {
  try {
    const { loginData } = payload;

    // const response = yield call(
    //   request.getLogin(profile.name,profile.email,profile.googleId)
    // );
    //yield put(getLoginSuccess(response));
    console.log('asdf');
  } catch (e) {
    yield put(getLoginFailure(e));
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, getLoginSaga);
}
