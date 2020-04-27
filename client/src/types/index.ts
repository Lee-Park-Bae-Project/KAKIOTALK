export interface User {
  id: string;
  userName: string;
  statusMessage: string;
}

export interface ChatRoom {
  id: string;
  userList: string[];
  lastMessage: string;
  lastModified: number;
  numOfNewMessages: number;
}
export interface Chat {
  chatList: string[];
  socketId: string;
}
