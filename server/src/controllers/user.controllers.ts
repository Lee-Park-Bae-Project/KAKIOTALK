import { Request, NextFunction, Response } from "express";
const get = (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "users get" });
};

export { get };
