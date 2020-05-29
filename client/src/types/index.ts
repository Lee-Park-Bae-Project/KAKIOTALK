export interface User {
  uuid: string;
  email: string;
  name: string;
  statusMessage: string;
}
export interface loginInfo {
  isLoggedIn: boolean;
}
export interface Chat {
  uuid: string;
  content: string;
  sender: string;
  roomId: string;
  createdAt: number;
}
export interface Room {
  uuid: string;
  participants: string[];
  lastMessage?: string;
  updatedAt?: number;
  numOfNewMessages?: number;
}
