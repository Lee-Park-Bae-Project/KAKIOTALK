import {
  put, takeEvery, call,
} from 'redux-saga/effects';

import {
  GET_FRIENDS,
  getFriendsFailure,
  getFriendsSuccess,
} from 'modules/friends/action';
import request from 'common/request';

function* getFriendsSaga() {
  try {
    const response = yield call(request.getFriendList);
    yield put(getFriendsSuccess(response.data.data));
  } catch (e) {
    yield put(getFriendsFailure(e));
  }
}

export default function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, getFriendsSaga);
}
