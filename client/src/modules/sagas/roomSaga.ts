import {
  put, takeEvery, call,
} from 'redux-saga/effects';

import {
  GET_ROOM_REQUEST,
  getRoomSuccess,
  getRoomFailure,
} from 'modules/room/action';

import request from 'common/request';

function* room() {
  try {
    const response = yield call(request.getRooms);
    yield put(getRoomSuccess(response.data.data));
  } catch (e) {
    yield put(getRoomFailure(e.message));
  }
}

export default function* roomSaga() {
  yield takeEvery(GET_ROOM_REQUEST, room);
}
