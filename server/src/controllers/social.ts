import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { response } from '../common/utils';
import * as userService from '../services/user';
import socialService from '../services/social';
import { IDecodedUser, IUser } from 'src/types';

const getFriendsList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { googleId } = req.decodedUser;
    const user:IUser|null= await userService.findByGoogleId(googleId);
    let data : any 
    if(user){
      data = await socialService.getFriendsList(user.id);
    }
    else {
      throw(createError(401,{message:'계정이 유효하지 않습니다.'}))
    }
    const friendlist = data.friend.map((friend) =>{ 
      const {uuid,name,email,statusMessage} = friend.user
      return ({
      uuid,
      name,
      email,
      statusMessage,
    })
  });
    response(res, friendlist);
  } catch (e) {
    next(e);
  }
};
const addFriend = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const user: IUser|null = await userService.findByGoogleId(req.decodedUser.googleId);
    const friendEmail: string = req.body.email;
    const friend: IUser|null = await userService.findByEmail(friendEmail);
    if (friend&&user) {
      await socialService.addFriend(user.id, friend.id);
      const {uuid,email,name,statusMessage} = friend
      response(res, {
        uuid,
        email,
        name,
        statusMessage
      });
    } else {
      return next(createError(401, {message:'유효하지 않은 이메일입니다.'}));
    }
  } catch (e) {
    next(e);
  }
};
const deleteFriend =async (req:Request,res:Response,next:NextFunction)=>{
  try{
    const user:IUser|null = await userService.findByGoogleId(req.decodedUser.googleId)
    const deleteUser:IUser|null = await userService.findByUuid(req.body.uuid);
    if(!user||!deleteUser) {
      throw(createError(401,{message:'유효하지 않은 계정입니다.'}))
    }
      const deleted = await socialService.deleteFriend(user.id,deleteUser.id)
      if(deleted==0) {
        throw(createError(401,{message:"삭제할 친구의 계정이 유효하지 않습니다."}))
      }
      response(res,{uuid:deleteUser.uuid})
    
  }catch (e) {
    next(e);
  }
}
export { getFriendsList, addFriend ,deleteFriend};
