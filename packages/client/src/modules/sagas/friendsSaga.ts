import {
  call, put, takeEvery,
} from 'redux-saga/effects'

import {
  ADD_FRIEND,
  addFriendFailure,
  addFriendSuccess,
  DELETE_FRIEND,
  deleteFriendFailure,
  deleteFriendSuccess,
  GET_FRIENDS,
  getFriendsFailure,
  getFriendsSuccess,
} from 'modules/friends/action'
import * as request from 'common/request'
import { alert } from 'common/utils'

function* getFriendsSaga() {
  try {
    const response = yield call(request.getFriendList)
    yield put(getFriendsSuccess(response.data.data))
  } catch (e) {
    alert.error(e.response.data.data.message)
    yield put(getFriendsFailure(e))
  }
}

function* addFriendSaga({ payload }: any) {
  try {
    const response = yield call(request.addFriend, payload)
    yield put(addFriendSuccess(response.data.data))
    alert.addFriend(response.data.data.name)
  } catch (e) {
    alert.error(e.response.data.data.message)
    yield put(addFriendFailure(e))
  }
}
function* deleteFriendSaga({ payload }: any) {
  try {
    const response = yield call(request.deleteFriend, payload)
    yield put(deleteFriendSuccess(response.data.data))
    alert.deleteFriend()
  } catch (e) {
    alert.error(e.response.data.data.message)
    yield put(deleteFriendFailure(e))
  }
}
export default function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, getFriendsSaga)
  yield takeEvery(ADD_FRIEND, addFriendSaga)
  yield takeEvery(DELETE_FRIEND, deleteFriendSaga)
}
