import { Request, NextFunction, Response } from "express";
//import httpStatus from "http-status";
import createError from "http-errors";
import { models } from "../models";
const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params.id) {
      const user = await models.user.findOne({
        where: {
          googleId: req.params.id,
        },
      });
      if (!user) {
        models.user.create({
          email: req.params.email,
          name: req.params.name,
          googleId: req.params.id,
        });
      }
      return res.status(httpStatus.OK).json(user);
    }
  } catch (e) {
    next(e);
  }
};

export { get };
