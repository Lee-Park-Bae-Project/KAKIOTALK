import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { response } from '../common/utils';
import userService from '../services/userService';
import socialServce from '../services/socialService';
import { IDecodedUser } from 'src/types';
const getFriendsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  
    if (!req.decodedUser) {
      return next(createError(401, '로그인이 필요합니다.'));
    }
    const { googleId } = req.decodedUser;
    const {id} = await userService.findByGoogleId(googleId);
    const data = await socialServce.getFriendsList(id);
    const friendlist = data.friend.map((friend) => ({
      id: friend.user.email,
      userName: friend.user.name,
      statusMessage: friend.user.status,
    }));
    response(res, friendlist);
  } catch (e) {
    next(e);
  }
};
const addFriend = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      return next(createError(401, '로그인이 필요합니다.'));
    }
    const user = await userService.findByGoogleId(req.decodedUser.googleId);
    const friendEmail = req.body.email;
    const friend = await userService.findByEmail(friendEmail);
    if (friend) {
      await socialServce.addFriend(user.id, friend.id);
      response(res, {
        id: friend.googleId,
        userName: friend.name,
        statusMessage: friend.status,
      });
    } else {
      return next(createError(401, '유효하지 않은 이메일입니다.'));
    }
  } catch (e) {
    next(e);
  }
};

export { getFriendsList, addFriend };
