import {
  addChatRoom,
  removeChatRoom,
} from 'modules/ChatRoomList/action';

export type ChatRoomListAction =
| ReturnType<typeof addChatRoom>
| ReturnType<typeof removeChatRoom>

export interface ChatRoom {
  id: string;
  userList: string[];
  lastMessage: string;
  lastModified: number;
  numOfNewMessages: number;
}
