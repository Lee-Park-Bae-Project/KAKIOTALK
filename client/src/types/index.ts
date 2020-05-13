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

export interface ChatRoom2 {
  uuid: string;
  participants: User[];
}

export interface User2 {
  user: {
    name: string;
    email: string;
    uuid: string;
  };

}
