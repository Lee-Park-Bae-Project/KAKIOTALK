import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects'

import {
  GET_ROOM_REQUEST,
  getRoomFailure,
  getRoomSuccess,
  LEAVE_ROOM_FAILURE,
  LEAVE_ROOM_REQUEST,
  leaveRoomFailure,
  leaveRoomRequest,
  leaveRoomSuccess,
  MAKE_ROOM_REQUEST,
  makeRoomRequest,
} from 'modules/room/action'

import * as request from 'common/request'
import { url } from 'common/constants'
import { APIs, Models } from '@kakio/common'

import { AxiosResponse } from 'axios'
import { joinRooms } from 'modules/socket'
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

function* leaveRoom(action: ReturnType<typeof leaveRoomRequest>) {
  try {
    const response: request.AxiosResponseType<APIs.LeaveRoom> = yield call(request.leaveRoom, action.payload.roomUuid)
    const { roomUuid, userUuid } = response.data.data
    yield put(leaveRoomSuccess({ roomUuid, userUuid }))
    // TODO: getContext 로 chat-list 로 이동
  } catch (e) {
    // TODO: alert 띄우기
    yield put(leaveRoomFailure(e))
  }
}

export default function* roomSaga() {
  yield takeLatest(LEAVE_ROOM_REQUEST, leaveRoom)
  yield takeEvery(MAKE_ROOM_REQUEST, makeRoomSaga)
  yield takeEvery(GET_ROOM_REQUEST, room)
}
