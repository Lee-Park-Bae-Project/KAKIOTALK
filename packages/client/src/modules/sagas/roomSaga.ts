import {
  call, getContext, put, spawn, takeEvery,
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
import { joinRooms } from 'socket'
import { Link } from 'react-router-dom'
import { alert } from 'common/utils'
import { InviteUser } from 'types'
import { MockedComponentClass } from 'react-dom/test-utils'
import { push } from '../../common/utils'

function* room() {
  try {
    const response: AxiosResponse<request.ResponseType<Models.Room[]>> = yield call(request.getRooms)
    const roomUuids = response.data.data.map((v) => v.uuid)
    joinRooms({ roomUuids })
    yield put(getRoomSuccess(response.data.data))
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
    const response: roomIdType = yield call(request.makeRoomRequest, payload)
    const roomUuids = response.data.data.rooms.map((v) => v.uuid)
    joinRooms({ roomUuids })
    yield put(getRoomSuccess(response.data.data.rooms))
    yield call(push, `${url.room}/${response.data.data.roomUuid}`)
  } catch (e) {
    yield put(getRoomFailure(e.message))
  }
}

export default function* roomSaga() {
  yield takeEvery(MAKE_ROOM_REQUEST, makeRoomSaga)
  yield takeEvery(GET_ROOM_REQUEST, room)
}
