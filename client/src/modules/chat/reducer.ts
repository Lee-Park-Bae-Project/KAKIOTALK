import {
  GET_CHAT_REQUEST,
  GET_CHAT_SUCCESS,
  GET_CHAT_FAILURE,
  ADD_CHAT,
} from 'modules/chat/action';

import {
  ChatAction,
  ChatState,
} from 'modules/chat/types';

const initialState: ChatState = {
  isLoading: false,
  data: {},
};

const chat = (state: ChatState = initialState, action: ChatAction) => {
  switch (action.type) {
    case GET_CHAT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CHAT_SUCCESS: {
      const { roomUuid } = action.payload;
      const { newChat } = action.payload;
      const newState = {
        [roomUuid]: newChat,
      };
      return {
        isLoading: false,
        data: newState,
      };
    }
    case GET_CHAT_FAILURE: {
      return state;
    }
    // case ADD_CHAT: {
    //   const { roomUuid } = action.payload;
    //   const { newChat } = action.payload;
    //   const newState = {
    //     ...state,
    //     data: {
    //       ...state.data,
    //       [roomUuid]: [
    //         ...state.data[roomUuid], newChat,
    //       ],
    //     },
    //   };
    //   console.log(newState);
    //   return {
    //     isLoading: false,
    //     data: newState,
    //   };
    // }

    default: return state;
  }
};

export default chat;
