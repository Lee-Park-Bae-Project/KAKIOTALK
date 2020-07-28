import {
  call, put, takeEvery,
} from 'redux-saga/effects'

import * as Action from 'modules/friends/action'
import * as request from 'common/request'
import { alert } from 'common/utils'
import { AxiosResponse } from 'axios'
import { ApiUser } from 'types'

type ApiUsersType = AxiosResponse<request.ResponseType<ApiUser[]>>
function* getFriendsSaga() {
  try {
    const response: ApiUsersType = yield call(request.getFriendList)
    yield put(Action.getFriendsSuccess(response.data.data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
type ApiUserType = AxiosResponse<request.ResponseType<ApiUser>>
function* addFriendSaga({ payload }: ReturnType<typeof Action.addFriend>) {
  try {
    const response: ApiUserType = yield call(request.addFriend, payload)
    yield put(Action.addFriendSuccess(response.data.data))
    alert.addFriend(response.data.data.name)
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}
interface UuidType {
  uuid: string
}
type ApiUuidType = AxiosResponse<request.ResponseType<UuidType>>
function* deleteFriendSaga({ payload }: ReturnType<typeof Action.deleteFriend>) {
  try {
    const response: ApiUuidType = yield call(request.deleteFriend, payload)
    yield put(Action.deleteFriendSuccess(response.data.data.uuid))
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
