import {
  call, put, takeEvery,
} from 'redux-saga/effects'

import {
  ADD_FRIEND,
  addFriend,
  addFriendSuccess,
  DELETE_FRIEND,
  deleteFriend,
  deleteFriendSuccess,
  GET_FRIENDS,
  getFriendsSuccess,
} from 'modules/friends/action'
import * as request from 'common/request'
import { alert } from 'common/utils'
import { AxiosResponse } from 'axios'
import { ApiUser } from 'types'

type ApiUsersType = AxiosResponse<request.ResponseType<ApiUser[]>>
function* getFriendsSaga() {
  try {
    const response: ApiUsersType = yield call(request.getFriendList)
    yield put(getFriendsSuccess(response.data.data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
type ApiUserType = AxiosResponse<request.ResponseType<ApiUser>>
function* addFriendSaga({ payload }: ReturnType<typeof addFriend>) {
  try {
    const response: ApiUserType = yield call(request.addFriend, payload)
    yield put(addFriendSuccess(response.data.data))
    alert.addFriend(response.data.data.name)
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
interface UuidType {
  uuid: string
}
type ApiUuidType = AxiosResponse<request.ResponseType<UuidType>>
function* deleteFriendSaga({ payload }: ReturnType<typeof deleteFriend>) {
  try {
    const response: ApiUuidType = yield call(request.deleteFriend, payload)
    yield put(deleteFriendSuccess(response.data.data.uuid))
    alert.deleteFriend()
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
export default function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, getFriendsSaga)
  yield takeEvery(ADD_FRIEND, addFriendSaga)
  yield takeEvery(DELETE_FRIEND, deleteFriendSaga)
}
