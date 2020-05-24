export interface User {
  uuid?: string;
  id: string;
  email: string;
  userName: string;
  statusMessage: string;
  status?: string;
  name?: string;
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

export interface IRoom {
  uuid: string;
  participants: Pick<User, 'uuid' | 'name' | 'email' | 'status'>[];
}

export interface User2 {
  user: {
    name: string;
    email: string;
    uuid: string;
  };

}

export interface IChat {
  id: number;
  uuid: string;
  roomParticipantsId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}
