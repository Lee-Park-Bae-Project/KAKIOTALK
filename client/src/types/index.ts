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
export interface Profile {
  id: string;
  token: string;
  name: string;
  googleId: string;
}
export interface Chat {
  chatList: [];
  socketId: null;
}
