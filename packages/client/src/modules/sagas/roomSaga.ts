import {
  call, put, takeEvery,
} from 'redux-saga/effects'

import {
  GET_ROOM_REQUEST,
  getRoomFailure,
  getRoomSuccess,
  MAKE_ROOM_REQUEST,
  makeRoomRequest,
} from 'modules/room/action'

import * as request from 'common/request'
import { url } from 'common/constants'
import { Models } from '@kakio/common'

import { AxiosResponse } from 'axios'
import { joinRooms } from 'modules/socket'
import { unwrapPromise } from 'types'
import { push } from '../../common/utils'

function* room() {
  try {
    const data: unwrapPromise<typeof request.getRooms> = yield call(request.getRooms)
    const roomUuids = data.map((v) => v.uuid)
    yield put(joinRooms({ roomUuids }))
    yield put(getRoomSuccess(data))
  } catch (e) {
    yield put(getRoomFailure(e.message))
  }
}

interface RoomReturnType{
  rooms: Models.Room[],
  roomUuid: string
}
type roomIdType = AxiosResponse<request.ResponseType<RoomReturnType>>
function* makeRoomSaga({ payload }: ReturnType<typeof makeRoomRequest>) {
  try {
    const response = yield call(request.makeRoomRequest, payload)
    const roomUuids = response.rooms.map((v: any) => v.uuid)
    joinRooms({ roomUuids })
    yield put(getRoomSuccess(response.rooms))
    yield call(push, `${url.room}/${response.roomUuid}`)
  } catch (e) {
    yield put(getRoomFailure(e.message))
  }
}

export default function* roomSaga() {
  yield takeEvery(MAKE_ROOM_REQUEST, makeRoomSaga)
  yield takeEvery(GET_ROOM_REQUEST, room)
}
