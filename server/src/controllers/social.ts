import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { response } from '../common/utils';
import userService from '../services/userService';
import socialServce from '../services/socialService';
const getFriendsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.kakio_jwt;
    if(!token) {
      return next(createError(401, '로그인이 필요합니다.'));
    }
    const user = await userService.findByAccessToken(token);
    console.log(user.id)
    const userId = user.id;
    //const friendsData = await socialServce.getFriendsList(userId);
    response(res,);
  } catch (e) {
    next(`${__dirname} ${e}`);
  }
};
const addFriend = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.kakio_jwt;
    const user = await userService.findByAccessToken(token);
    const friendEmail = req.body.email;
    const friend = await userService.findByEmail(friendEmail);
    const addedFriend = await socialServce.addFriend(user.id, friend.id);
    response(res, {
      id: friend.googleId,
      userName: friend.name,
      statusMessage: friend.status,
    });
  } catch (e) {}
};

export { getFriendsList, addFriend };
