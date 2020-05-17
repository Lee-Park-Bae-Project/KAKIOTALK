import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { response } from '../common/utils';
import * as userService from '../services/userService';
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
    const {id}: any = await userService.findByGoogleId(googleId);
    const data : any = await socialServce.getFriendsList(id);
    const friendlist = data.friend.map((friend) => ({
      id: friend.user.googleId,
      userName: friend.user.name,
      email:friend.user.email,
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
    const user: any = await userService.findByGoogleId(req.decodedUser.googleId);
    const friendEmail: any = req.body.email;
    const friend: any = await userService.findByEmail(friendEmail);
    if (friend) {
      await socialServce.addFriend(user.id, friend.id);
      response(res, {
        id: friend.googleId,
        email:friend.email,
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
const removeFriend =async (req:Request,res:Response,next:NextFunction)=>{
  try{
    if(!req.decodedUser) {
      return next(createError(401, '로그인이 필요합니다.'));
    }
    const user:any = await userService.findByGoogleId(req.decodedUser.googleId)
    const deleteUser:any = await userService.findByGoogleId(req.body.googleId);
    await socialServce.removeFriend(user.id,deleteUser.id)
    response(res,{googleId:deleteUser.googleId})
  }catch (e) {

  }
}
export { getFriendsList, addFriend ,removeFriend};
