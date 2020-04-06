import { Request, NextFunction, Response } from "express";
import httpStatus from "http-status";
import createError from "http-errors";
import { models } from "../models";
const friendFind = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params.name) {
      const friend = await models.friend.findOne({
        where: {
          name: req.params.name,
        },
      });
      if (!friend) {
        return res.json("Can't find friend");
      }
      return res.status(httpStatus.OK).json(friend);
    }
  } catch (e) {
    next(e);
  }
};
const friendAdd = async (req: Request, res: Response, next: NextFunction) => {
  try {
    models.friend.create({
      id: req.params.id,
      followerId: req.params.followerId,
      followeeId: req.params.followerId,
    });
  } catch (e) {
    next(e);
  }
};
const friendDelete = async (
  req: Request,
  res,
  Response,
  next: NextFunction
) => {
  try {
    const friend = await models.friend.destroy({
      where: {
        id: req.params.name,
      },
    });
  } catch (e) {
    next(e);
  }
};
// const friendUpdate = async(req:Request,res,Response,next:NextFunction)=>{
//     try{
//         const friend = await models.friend.update({name:name},{
//             where:{
//                 id:req.params.name
//             }
//         })
//     }catch(e){
//         next(e);
//     }
// }

export { friendAdd, friendFind, friendDelete /*friendUpdate*/ };
