/* eslint-disable no-param-reassign */
import produce from 'immer'
import * as Action from 'modules/chat/action'

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
    case Action.GET_CHAT_REQUEST: {
      const newState = produce(state, (draft) => {
        draft.isLoading = true
      })
      return newState
    }
    case Action.GET_CHAT_SUCCESS: {
      const {
        roomUuid, chats, offset, limit,
      } = action.payload

      // let combinedChats: ApiChat[] = []
      // if (state.data[roomUuid]) {
      //   combinedChats = combinedChats.concat(state.data[roomUuid].chats).concat(chats)
      // } else {
      //   combinedChats = chats
      // }

      const newState = produce(state, (draft) => {
        draft.isLoading = false
        draft.data[roomUuid] = {
          chats,
          limit,
          offset: offset + LIMIT,
        }
      })

      return newState
    }
    case Action.GET_CHAT_FAILURE: {
      return state
    }
    case Action.ADD_CHAT: {
      const {
        roomUuid, newChat,
      } = action.payload
      const newState = produce(state, (draft) => {
        draft.data[roomUuid].chats.unshift(newChat)
      })

      return newState
    }

    case Action.ADD_CHAT_OFFSET: {
      const {
        roomUuid, amount,
      } = action.payload
      return produce(state, (draft) => {
        draft.data[roomUuid].offset += amount
      })
    }

    case Action.LOAD_MORE_REQUEST: {
      const newState = produce(state, (draft) => {
        draft.isLoading = true
      })

      return newState
    }
    case Action.LOAD_MORE_SUCCESS: {
      const {
        roomUuid, chats, limit, offset,
      } = action.payload

      const newState = produce(state, (draft) => {
        draft.isLoading = false
        draft.data[roomUuid].offset += limit
        draft.data[roomUuid].chats = [...state.data[roomUuid].chats, ...chats]
      })

      return newState
    }
    case Action.LOAD_MORE_FAILURE: {
      return produce(state, (draft) => {
        draft.isLoading = false
      })
    }

    default: return state
  }
}

export default chat
