export interface User {
  id: string;
  userName: string;
  statusMessage: string;
}
export interface loginInfo {
  loginToken: string;
  isLoggedIn: boolean;
}

export interface ChatRoom {
  id: string;
  userList: string[];
  lastMessage: string;
  lastModified: number;
  numOfNewMessages: number;
}
