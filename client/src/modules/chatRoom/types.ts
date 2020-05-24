import {
  initChatRoom,
  addChatRoom,
  removeChatRoom,
  getChatRoomSuccess,
  getChatRoomFailure,
} from 'modules/chatRoom/action';

export type ChatRoomListAction =
| ReturnType<typeof initChatRoom>
| ReturnType<typeof addChatRoom>
| ReturnType<typeof removeChatRoom>
| ReturnType<typeof getChatRoomSuccess>
| ReturnType<typeof getChatRoomFailure>
