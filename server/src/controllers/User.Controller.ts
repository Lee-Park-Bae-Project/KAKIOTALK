import { Request, NextFunction, Response } from "express";
const get = (req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: "users get" });
};

const email = "https://www.googleapis.com/auth/userinfo.email";
const profile = "https://www.googleapis.com/auth/userinfo.profile";
export { get };
