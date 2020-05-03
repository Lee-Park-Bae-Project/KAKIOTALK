import { IDecodedUser } from '../index'

declare global {
  namespace Express {
    interface Request {
      decodedUser?: IDecodedUser;
    }
  }
}
