import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IDecodedUser } from '../types';
import { cookieName, jwtConfig } from '../configs';
import { message } from '../common/utils';
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies[cookieName];
    if (!token) {
      throw new Error(message.LOGIN_REQUIRED);
    }
    const decoded = jwt.verify(token, jwtConfig.secret);

    req.decodedUser = decoded as IDecodedUser;
    next();
  } catch (e) {
    next(e);
  }
};

export default isAuthenticated;
