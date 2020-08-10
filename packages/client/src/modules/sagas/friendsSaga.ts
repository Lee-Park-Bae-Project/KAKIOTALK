import {
  call, put, takeEvery,
} from 'redux-saga/effects'

import * as Action from 'modules/friends/action'
import * as request from 'common/request'
import { alert } from 'common/utils'
import { unwrapPromise } from 'types'

function* getFriendsSaga() {
  try {
    const data: unwrapPromise<typeof request.getFriendList> = yield call(request.getFriendList)
    yield put(Action.getFriendsSuccess(data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
function* addFriendSaga({ payload }: ReturnType<typeof Action.addFriend>) {
  try {
    const data: unwrapPromise<typeof request.addFriend> = yield call(request.addFriend, payload)
    yield put(Action.addFriendSuccess(data))
    alert.addFriend(data.name)
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}

function* deleteFriendSaga({ payload }: ReturnType<typeof Action.deleteFriend>) {
  try {
    const data: unwrapPromise<typeof request.deleteFriend> = yield call(request.deleteFriend, payload)
    yield put(Action.deleteFriendSuccess(data.uuid))
    alert.deleteFriend()
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
export default function* friendsSaga() {
  yield takeEvery(Action.GET_FRIENDS_REQUEST, getFriendsSaga)
  yield takeEvery(Action.ADD_FRIEND_REQUEST, addFriendSaga)
  yield takeEvery(Action.DELETE_FRIEND_REQUEST, deleteFriendSaga)
}
