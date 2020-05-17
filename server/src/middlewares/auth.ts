import {
  NextFunction, Request, Response,
} from 'express'
import jwt from 'jsonwebtoken'
import { IDecodedUser } from '../types'
import {
  cookieName,
  jwtConfig,
} from '../configs'

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies[cookieName]
    if (!token) {
      throw new Error('no token')
    }
    const decoded = jwt.verify(
      token,
      jwtConfig.secret,
    )

    req.decodedUser = decoded as IDecodedUser
    next()
  } catch (e) {
    next(e)
  }
}

export default isAuthenticated
