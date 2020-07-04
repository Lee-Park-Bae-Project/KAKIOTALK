import {
  call, put, takeLatest,
} from 'redux-saga/effects'

import {
  GET_CHAT_REQUEST,
  getChatFailure,
  getChatRequest,
  getChatSuccess,
} from 'modules/chat'

import { ApiChat } from 'types'
import { AxiosResponse } from 'axios'
import * as request from 'common/request'

interface Temp {
  chats: ApiChat[]
  offset: number
  limit: number
}
type ResponseType = AxiosResponse<request.ResponseType<Temp>>
function* getChatSaga(action: ReturnType<typeof getChatRequest>) {
  try {
    const { roomUuid } = action.payload
    const response: ResponseType = yield call(request.getChatByRoom, action.payload)
    const {
      chats, offset, limit,
    } = response.data.data
    yield put(getChatSuccess({
      roomUuid,
      chats,
      offset,
      limit,
    }))
  } catch (e) {
    yield put(getChatFailure(e))
  }
}

export default function* chatSaga() {
  yield takeLatest(GET_CHAT_REQUEST, getChatSaga)
}
