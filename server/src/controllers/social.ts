import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { response, message } from '../common/utils';
import * as userService from '../services/user';
import socialService from '../services/social';

const getFriendsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { googleId } = req.decodedUser;
    const user = await userService.findByGoogleId(googleId);
    if (!user) {
      throw createError(401, { message: message.INVALID_GOOGLE_ID });
    }
    const data = await socialService.getFriendsList(user.id);
    if (!data) {
      throw createError(401, { message: message.INVALID_FRIEND_ID });
    }
    const friendlist = data.friend.map((friend) => {
      const { uuid, name, email, statusMessage } = friend.user;
      return {
        uuid,
        name,
        email,
        statusMessage,
      };
    });
    response(res, friendlist);
  } catch (e) {
    next(e);
  }
};
const addFriend = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.findByGoogleId(req.decodedUser.googleId);
    const friendEmail: string = req.body.email;
    const friend = await userService.findByEmail(friendEmail);
    if (!friend || !user) {
      return next(createError(401, { message: message.INVALID_EMAIL }));
    }
    const [, created] = await socialService.addFriend(user.id, friend.id);
    if (!created) {
      return next(createError(401, { message: message.ALREADY_EXIST_FRIEND }));
    }
    const { uuid, email, name, statusMessage } = friend;
    response(res, {
      uuid,
      email,
      name,
      statusMessage,
    });
  } catch (e) {
    next(e);
  }
};
const deleteFriend = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.findByGoogleId(req.decodedUser.googleId);
    const deleteUser = await userService.findByUuid(req.body.uuid);
    if (!user || !deleteUser) {
      throw createError(401, { message: message.INVALID_FRIEND_ID });
    }
    const deleted = await socialService.deleteFriend(user.id, deleteUser.id);
    if (deleted == 0) {
      throw createError(401, {
        message: message.ERROR_OCCURED,
      });
    }
    response(res, { uuid: deleteUser.uuid });
  } catch (e) {
    next(e);
  }
};
export { getFriendsList, addFriend, deleteFriend };
