import {
  put, takeEvery, call,
} from 'redux-saga/effects';

import {
  GET_CHAT_ROOM,
  getChatRoomFailure,
  getChatRoomSuccess,
} from 'modules/chatRoom/action';

import request from 'common/request';

function* getChatRoomSaga() {
  try {
    const response = yield call(request.getChatList);
    yield put(getChatRoomSuccess(response.data.data));
  } catch (e) {
    yield put(getChatRoomFailure(e));
  }
}

export default function* chatRoomSaga() {
  yield takeEvery(GET_CHAT_ROOM, getChatRoomSaga);
}
