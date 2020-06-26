/* eslint-disable no-param-reassign */
import produce from 'immer'
import {
  ADD_CHAT,
  GET_CHAT_FAILURE,
  GET_CHAT_REQUEST,
  GET_CHAT_SUCCESS,
  MAKE_CHAT,
} from 'modules/chat/action'

import {
  ChatAction,
  ChatState,
} from 'modules/chat/types'

const initialState: ChatState = {
  isLoading: false,
  data: {},
}

const chat = (state: ChatState = initialState, action: ChatAction) => {
  switch (action.type) {
    case GET_CHAT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_CHAT_SUCCESS: {
      const { roomUuid } = action.payload
      const { newChat } = action.payload
      const ns = produce(state, (draft) => {
        draft.isLoading = false
        draft.data[roomUuid] = newChat
      })
      return ns
    }
    case GET_CHAT_FAILURE: {
      return state
    }
    case ADD_CHAT: {
      const { roomUuid } = action.payload
      const { newChat } = action.payload
      const newState = produce(state, (draftState) => {
        draftState.data[roomUuid].push(newChat)
      })

      return newState
    }

    default: return state
  }
}

export default chat
