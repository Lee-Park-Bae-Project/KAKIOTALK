export interface User {
  id: number;
  uuid: string;
  name: string;
  email: string;
  statusMessage: string;
  googleId: string;
  googleAccessToken: string;
  googleRefreshToken: string;
  accessToken: string;
  createdAt: string;
  updatedAt: string;
}

export interface Friend {
  id: number;
  uuid: string;
  userId: number;
  friendId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Room {
  id: number;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  participants: Pick<User, 'uuid' | 'name' | 'email' | 'statusMessage'>[];
}

export interface RoomParticipants {
  id: number;
  uuid: string;
  userId: number;
  roomId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Chat {
  id: number;
  uuid: string;
  roomParticipantsId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  sender: string;
}

export interface ChatIsRead{
  id: number;
  uuid: string;
  unreaderId: number;
  chatId: number;
  createdAt: string;
  updatedAt: string;
}
