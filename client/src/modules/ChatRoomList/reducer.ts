import {
  ADD_CHAT_ROOM,
  REMOVE_CHAT_ROOM,
} from 'modules/ChatRoomList/action';

import {
  ChatRoom,
  ChatRoomListAction,
} from 'modules/ChatRoomList/types';

const initialState: ChatRoom[] = [];

function chatRoomList(state: ChatRoom[] = initialState, action: ChatRoomListAction) {
  switch (action.type) {
    case ADD_CHAT_ROOM: {
      return state.concat(action.payload);
    }
    case REMOVE_CHAT_ROOM: {
      return state.filter((chatRoom) => chatRoom.id !== action.payload);
    }
    default:
      return state;
  }
}

export default chatRoomList;
