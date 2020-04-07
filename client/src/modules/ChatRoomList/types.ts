import {
  initChatRoom,
  addChatRoom,
  removeChatRoom,
} from 'modules/chatRoomList/action';

export type ChatRoomListAction =
| ReturnType<typeof initChatRoom>
| ReturnType<typeof addChatRoom>
| ReturnType<typeof removeChatRoom>

export interface ChatRoom {
  id: string;
  userList: string[];
  lastMessage: string;
  lastModified: number;
  numOfNewMessages: number;
}
