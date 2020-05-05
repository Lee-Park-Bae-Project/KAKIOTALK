import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { cookieConfig, cookieName } from '../configs';
import { response } from '../common/utils';
import loginService from '../services/auth';
import userService from '../services/userService';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { googleId, email, name, googleAccessToken } = req.body;

    const token = await loginService.login(
      googleId,
      name,
      email,
      googleAccessToken
    );
    res.cookie(cookieName, token, cookieConfig);
    response(res);
  } catch (e) {
    next(e);
  }
};
const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie(cookieName, { path: '/' });
    res.send('Success');
  } catch (e) {
    next(e);
  }
};

const getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      return next(createError(401, '로그인이 필요합니다.'));
    }
    const { googleId } = req.decodedUser;
    const user = await userService.findByGoogleId(googleId);
    if (!user) {
      return next(createError(404, '유저정보를 찾을 수 없습니다.'));
    }

    return response(res, { user });
  } catch (e) {
    next(e);
  }
};

export { login, getUserInfo, logout };
