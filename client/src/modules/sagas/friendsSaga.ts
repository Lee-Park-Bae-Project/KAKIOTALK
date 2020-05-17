import { put, takeEvery, call } from 'redux-saga/effects';

import {
  GET_FRIENDS,
  getFriends,
  getFriendsFailure,
  getFriendsSuccess,
  ADD_FRIEND,
  addFriendFailure,
  addFriendSuccess,
} from 'modules/friends/action';
import request from 'common/request';

function* getFriendsSaga() {
  try {
    const response = yield call(request.getFriendList);
    console.log(response.data)
    yield put(getFriendsSuccess(response.data.data));
  } catch (e) {
    yield put(getFriendsFailure(e));
  }
}

function* addFriendSaga({payload}:any) {
  try {
    const response = yield call(request.addFriend,payload);
    yield put(addFriendSuccess(response.data.data));
  } catch (e) {
    yield put(addFriendFailure(e))
  }
}
export default function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, getFriendsSaga);
  yield takeEvery(ADD_FRIEND,addFriendSaga);
}
