import {
  call, put, takeLatest,
} from 'redux-saga/effects'

import {
  GET_CHAT_REQUEST,
  getChatFailure,
  getChatRequest,
  getChatSuccess,
  LOAD_MORE_REQUEST,
  loadMoreFailure,
  loadMoreRequest,
  loadMoreSuccess,
} from 'modules/chat'

import { ApiChat } from 'types'
import { AxiosResponse } from 'axios'
import * as request from 'common/request'
import {
  RootState, store,
} from 'modules'

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

function* loadMoreSaga(action: ReturnType<typeof loadMoreRequest>) {
  try {
    const { roomUuid } = action.payload
    const chatState = store.getState().chat
    const {
      offset, limit,
    } = chatState.data[roomUuid]
    const response: ResponseType = yield call(request.loadMoreChat, {
      roomUuid,
      offset,
      limit,
    })

    yield put(loadMoreSuccess({
      ...response.data.data,
      roomUuid,
    }))
  } catch (e) {
    yield put(loadMoreFailure(e))
  }
}

export default function* chatSaga() {
  yield takeLatest(GET_CHAT_REQUEST, getChatSaga)
  yield takeLatest(LOAD_MORE_REQUEST, loadMoreSaga)
}
