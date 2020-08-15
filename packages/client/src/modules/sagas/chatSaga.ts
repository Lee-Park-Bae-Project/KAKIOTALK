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

import { unwrapPromise } from 'types'
import * as request from 'common/request'
import { Store } from 'modules'

function* getChatSaga(action: ReturnType<typeof getChatRequest>) {
  try {
    const { roomUuid } = action.payload
    const data: unwrapPromise<typeof request.getChatByRoom> = yield call(request.getChatByRoom, action.payload)
    yield put(getChatSuccess({
      roomUuid,
      ...data,
    }))
  } catch (e) {
    yield put(getChatFailure(e))
  }
}

function* loadMoreSaga(action: ReturnType<typeof loadMoreRequest>) {
  try {
    const { roomUuid } = action.payload
    const { store } = Store
    const chatState = store.getState().chat
    const {
      offset, limit,
    } = chatState.data[roomUuid]
    const data: unwrapPromise<typeof request.loadMoreChat> = yield call(request.loadMoreChat, {
      roomUuid,
      offset,
      limit,
    })

    yield put(loadMoreSuccess({
      ...data,
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
