import { Request, NextFunction, Response } from "express";
const auth = (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "users get" });
};

export { auth };
