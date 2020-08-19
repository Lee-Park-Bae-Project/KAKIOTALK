import {
  NextFunction, Request, Response,
} from 'express'
import { IDecodedUser } from '../types'
import { cookieName } from '../configs'
import * as httpError from '../common/error'
import { refreshAccessToken } from '../services/auth'
import { verifyJwt } from '../common/utils'

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies[cookieName]
    if (!token) {
      throw httpError.UNAUTHORIZED
    }
    const decoded = verifyJwt(token)

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
