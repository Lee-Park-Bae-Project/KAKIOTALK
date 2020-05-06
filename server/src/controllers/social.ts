import { NextFunction, Request, Response } from 'express';
import { response } from '../common/utils';
import userService from '../services/userService'
const getFriendList = async (req:Request,res:Response,next:NextFunction)=>{
  try{
    const token = req.cookies.kakio_jwt;
    const user = userService.findByAccessToken(token);
  }
  catch(e){
    next(`${__dirname} ${e}`)
  }
}

export {getFriendList}