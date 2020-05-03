export interface IChat {
  id: string;
  roomId: string;
  sender: string;
  content: string;
}

export interface IChatIsRead{
  id: string
  userId: string;
  chatId: string;
  isRead: boolean;
}

export interface IFriend {
  id: string
  followerId: string
  followeeId: string
}

export interface IRoom {
  id: string
  numOfParticipants: number
}

export interface IRoomParticipants {
  id: string
  roomId: string
  participants: string
  numOfUnread: number
}

export interface IUser {
  id: string;
  name: string;
  curState: string;
  email: string;
  accessToken: string
}

export interface IDecodedUser {
  googleId: string;
  iat: string;
  exp: string;
}
