import {
  call, put, takeEvery,
} from 'redux-saga/effects'

import {
  GET_ROOM_REQUEST,
  getRoomFailure,
  getRoomSuccess,
  MAKE_ROOM,
  makeRoom,

  makeRoomSuccess,
} from 'modules/room/action'

import * as request from 'common/request'
import { Room } from '@kakio/common'
import { AxiosResponse } from 'axios'
import { joinRooms } from 'socket'
import { alert } from 'common/utils'
import { InviteUser } from 'types'

function* room() {
  try {
    const response: AxiosResponse<request.ResponseType<Room[]>> = yield call(request.getRooms)
    const roomUuids = response.data.data.map((v) => v.uuid)
    joinRooms({ roomUuids })
    yield put(getRoomSuccess(response.data.data))
  } catch (e) {
    yield put(getRoomFailure(e.message))
  }
}
type roomIdType = AxiosResponse<request.ResponseType<string>>
function* makeRoomSaga({ payload }: ReturnType<typeof makeRoom>) {
  try {
    const response: roomIdType = yield call(request.makeRoom, payload)
    yield put(makeRoomSuccess(response.data.data))
  } catch (e) {
    alert.error(e.response.data.data.message)
  }
}

export default function* roomSaga() {
  yield takeEvery(GET_ROOM_REQUEST, room)
  yield takeEvery(MAKE_ROOM, makeRoomSaga)
}
