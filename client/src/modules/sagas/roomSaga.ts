import {
  put, takeEvery, call,
} from 'redux-saga/effects';

import {
  GET_ROOM_REQUEST,
  getRoomSuccess,
  getRoomFailure,
} from 'modules/room/action';

import * as request from 'common/request';
import { Room } from 'types';
import { AxiosResponse } from 'axios';
import { joinRooms } from 'socket';

function* room() {
  try {
    const response: AxiosResponse<request.ResponseType<Room[]>> = yield call(request.getRooms);
    const roomUuids = response.data.data.map((v) => v.uuid);
    joinRooms({ roomUuids });
    yield put(getRoomSuccess(response.data.data));
  } catch (e) {
    yield put(getRoomFailure(e.message));
  }
}

export default function* roomSaga() {
  yield takeEvery(GET_ROOM_REQUEST, room);
}
