import { AxiosError } from 'axios';

export const INIT_CHAT_ROOM = 'chatroom/INIT_CHAT_ROOM' as const;
export const GET_CHAT_ROOM = 'chatroom/GET_CHAT_ROOM' as const;
export const GET_CHAT_ROOM_SUCCESS = 'chatroom/GET_CHAT_ROOM_SUCCESS' as const;
export const GET_CHAT_ROOM_FAILURE = 'chatroom/GET_CHAT_ROOM_FAILURE' as const;
export const ADD_CHAT_ROOM = 'chatroom/ADD_CHAT_ROOM' as const;
export const REMOVE_CHAT_ROOM = 'chatroom/REMOVE_CHAT_ROOM' as const;

export const initChatRoom = (chatRoom: any) => ({
  type: INIT_CHAT_ROOM,
  payload: chatRoom,
});

export const getChatRoom = () => ({
  type: GET_CHAT_ROOM,
});

export const getChatRoomSuccess = (chatRoom: any) => ({
  type: GET_CHAT_ROOM_SUCCESS,
  payload: chatRoom,
});

export const getChatRoomFailure = (e: AxiosError) => ({
  type: GET_CHAT_ROOM_FAILURE,
  payload: e,
});

export const addChatRoom = (newChatRoom: any) => ({
  type: ADD_CHAT_ROOM,
  payload: newChatRoom,
});

export const removeChatRoom = (id: string) => ({
  type: REMOVE_CHAT_ROOM,
  payload: id,
});
