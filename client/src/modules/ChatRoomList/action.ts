export const INIT_CHAT_ROOM = 'chatroom/INIT_CHAT_ROOM' as const;
export const ADD_CHAT_ROOM = 'chatroom/ADD_CHAT_ROOM' as const;
export const REMOVE_CHAT_ROOM = 'chatroom/REMOVE_CHAT_ROOM' as const;

export const initChatRoom = (chatRoom: any) => ({
  type: INIT_CHAT_ROOM,
  payload: chatRoom,
});
export const addChatRoom = (newChatRoom: any) => ({
  type: ADD_CHAT_ROOM,
  payload: newChatRoom,
});

export const removeChatRoom = (id: string) => ({
  type: REMOVE_CHAT_ROOM,
  payload: id,
});
