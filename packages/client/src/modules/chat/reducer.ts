/* eslint-disable no-param-reassign */
import produce from 'immer'
import {
  ADD_CHAT,
  GET_CHAT_FAILURE,
  GET_CHAT_REQUEST,
  GET_CHAT_SUCCESS,
} from 'modules/chat/action'

import {
  ChatAction,
  ChatState,
} from 'modules/chat/types'
import { ApiChat } from 'types'

const initialState: ChatState = {
  isLoading: false,
  data: {},
}
const LIMIT = 30

const chat = (state: ChatState = initialState, action: ChatAction) => {
  switch (action.type) {
    case GET_CHAT_REQUEST: {
      const newState = produce(state, (draft) => {
        draft.isLoading = true
      })
      return newState
    }
    case GET_CHAT_SUCCESS: {
      const {
        roomUuid, chats, offset, limit,
      } = action.payload

      let combinedChats: ApiChat[] = []

      if (state.data[roomUuid]) {
        combinedChats = combinedChats.concat(state.data[roomUuid].chats).concat(chats)
      } else {
        combinedChats = chats
      }

      const newState = produce(state, (draft) => {
        draft.isLoading = false
        draft.data[roomUuid] = {
          chats: combinedChats,
          limit,
          offset: offset + LIMIT,
        }
      })

      return newState
    }
    case GET_CHAT_FAILURE: {
      return state
    }
    case ADD_CHAT: {
      const { roomUuid } = action.payload
      const { newChat } = action.payload
      const newState = produce(state, (draft) => {
        draft.data[roomUuid].chats.unshift(newChat)
      })

      return newState
    }

    default: return state
  }
}

export default chat
