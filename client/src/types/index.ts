export interface User {
  id: string;
  userName: string;
  statusMessage: string;
}
export interface loginInfo {
  loginToken: Profile;
  isLoggedIn: boolean;
}

export interface ChatRoom {
  id: string;
  userList: string[];
  lastMessage: string;
  lastModified: number;
  numOfNewMessages: number;
}
export interface Profile {
  email: string;
  name: string;
  googleId: string;
}
export interface Chat {
  chatList: string[];
  socketId: string;
}
