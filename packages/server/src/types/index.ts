import {
  NextFunction,
  Request,
  Response,
} from 'express'

export interface IDecodedUser {
  googleId: string;
  iat: string;
  exp: string;
}

export type Controller = (req: Request, res: Response, next: NextFunction) => any

// types for socket.
export interface SendMsg {
  roomUuid: string;
  content: string;
  createdAt: string;
  userUuid: string;
}

export interface JoinRooms {
  roomUuids: string[];
}

export interface AfterLogin{
  uuid: string;
}
