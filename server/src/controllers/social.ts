import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { response } from '../common/utils';
import * as userService from '../services/userService';
import socialService from '../services/socialService';
import { IDecodedUser } from 'src/types';

const getFriendsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const { googleId } = req.decodedUser;
    const {id}: any = await userService.findByGoogleId(googleId);
    const data : any = await socialService.getFriendsList(id);
    if(!id) throw(createError(401,'계정이 유효하지 않습니다.'))
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

    const user: any = await userService.findByGoogleId(req.decodedUser.googleId);
    const friendEmail: any = req.body.email;
    const friend: any = await userService.findByEmail(friendEmail);
    if (friend) {
      await socialService.addFriend(user.id, friend.id);
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
const deleteFriend =async (req:Request,res:Response,next:NextFunction)=>{
  try{
    const user:any = await userService.findByGoogleId(req.decodedUser.googleId)
    const deleteUser:any = await userService.findByGoogleId(req.body.googleId);
    if(!user||!deleteUser) {
      throw(createError(401,'유효하지 않은 계정입니다.'))
    }
      const deleted = await socialService.deleteFriend(user.id,deleteUser.id)
      if(deleted==0) {
        throw(createError(401,"삭제할 친구의 계정이 유효하지 않습니다."))
      }
      response(res,{googleId:deleteUser.googleId})
    
  }catch (e) {
    next(e);
  }
}
export { getFriendsList, addFriend ,deleteFriend};
