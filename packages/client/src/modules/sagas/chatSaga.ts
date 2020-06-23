import {
  call, put, takeEvery,
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

type Type = AxiosResponse<request.ResponseType<ApiChat[]>>
function* getChatSaga(action: ReturnType<typeof getChatRequest>) {
  try {
    const response: Type = yield call(request.getChatByRoom, action.payload)
    yield put(getChatSuccess(action.payload.roomUuid, response.data.data))
  } catch (e) {
    yield put(getChatFailure(e))
  }
}

export default function* chatSaga() {
  yield takeEvery(GET_CHAT_REQUEST, getChatSaga)
}
