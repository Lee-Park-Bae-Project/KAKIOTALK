export interface IChat {
  id: number;
  uuid: string;
  roomParticipantsId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  sender?: string;
}

export interface IChatIsRead{
  id: number;
  uuid: string;
  unreaderId: number;
  chatId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IFriend {
  id: number;
  uuid: string;
  userId: number;
  friendId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IRoom {
  id: number;
  uuid: string;
  createdAt: string;
  updatedAt: string;
}

export interface IRoomParticipants {
  id: number;
  uuid: string;
  userId: number;
  roomId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
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

export interface IDecodedUser {
  googleId: string;
  iat: string;
  exp: string;
}
