/* eslint-disable camelcase */
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
export type ControllerHelper = (controller: Controller) => Controller

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

export interface RefreshAccessToken {
  access_token: string
  expires_in: number
  scope: string
  token_type: string
}

export interface GetTokenFromGoogle {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
  id_token: string
}

export interface GetProfileFromGoogle {
  id: string
  email: string
  verified_email: boolean
  name: string
  given_name: string
  family_name: string
  picture: string
  locale: string
}
