import { put, takeEvery, call } from 'redux-saga/effects';

import {
  GET_FRIENDS,
  getFriends,
  getFriendsFailure,
  getFriendsSuccess,
  ADD_FRIEND,
  addFriendFailure,
  addFriendSuccess,
  DELETE_FRIEND,
  deleteFriendSuccess,
  deleteFriendFailure
} from 'modules/friends/action';
import request from 'common/request';
import swal from 'common/utils'

function* getFriendsSaga() {
  try {
    const response = yield call(request.getFriendList);
    yield put(getFriendsSuccess(response.data.data));
  } catch (e) {
    yield put(getFriendsFailure(e));
  }
}

function* addFriendSaga({payload}:any) {
  try {
    const response = yield call(request.addFriend,payload);
    swal(`${payload.name}님을 친구로 추가했습니다.`,"","success")
    yield put(addFriendSuccess(response.data.data));
  } catch (e) {
    swal(e.response.data.data.message,"","error");
    yield put(addFriendFailure(e))
  }
}
function* deleteFriendSaga({payload}:any) {
  try{
    const response = yield call(request.deleteFriend,payload);
    yield put(deleteFriendSuccess(response.data.data));
    swal('삭제되었습니다.',"","success")

  }catch(e){
    console.log(e.response.data)
    swal(e.response.data.data.message,"","error");
    yield put(deleteFriendFailure(e))
  }
}
export default function* friendsSaga() {
  yield takeEvery(GET_FRIENDS, getFriendsSaga);
  yield takeEvery(ADD_FRIEND,addFriendSaga);
  yield takeEvery(DELETE_FRIEND,deleteFriendSaga)
}
