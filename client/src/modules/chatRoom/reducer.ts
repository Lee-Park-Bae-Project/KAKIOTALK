import {
  INIT_CHAT_ROOM,
  ADD_CHAT_ROOM,
  REMOVE_CHAT_ROOM,
  GET_CHAT_ROOM_FAILURE,
  GET_CHAT_ROOM_SUCCESS,
} from 'modules/chatRoom/action';
import { ChatRoom } from 'types';
import {
  ChatRoomListAction,
} from 'modules/chatRoom/types';

const initialState: ChatRoom[] = [];

function chatRoomList(state: ChatRoom[] = initialState, action: ChatRoomListAction) {
  switch (action.type) {
    case INIT_CHAT_ROOM: {
      return action.payload;
    }
    case GET_CHAT_ROOM_SUCCESS: {
      return action.payload;
    }
    case GET_CHAT_ROOM_FAILURE: {
      alert(action.payload.response.data.message);
      return state;
    }
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
