import {
  NextFunction, Request, Response,
} from 'express'
import jwt from 'jsonwebtoken'
import { IDecodedUser } from '../types'
import {
  cookieName, jwtConfig,
} from '../configs'
import * as httpError from '../common/error'
import { refreshAccessToken } from '../services/auth'

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies[cookieName]
    if (!token) {
      throw httpError.UNAUTHORIZED
    }
    const decoded = jwt.verify(token, jwtConfig.secret)

    req.decodedUser = decoded as IDecodedUser
    next()
  } catch (e) {
    // console.log(req.originalUrl)
    // refreshAccessToken()
    // res.redirect(req.originalUrl)
    throw httpError.UNAUTHORIZED
  }
}

export default isAuthenticated
