import {
  NextFunction, Request, Response,
} from 'express'
import * as userService from '../services/user'
import {
  cookieConfig, cookieName,
} from '../configs'
import { response } from '../common/utils'
import loginService from '../services/auth'
import * as httpError from '../common/error'

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      googleId, email, name, googleAccessToken, imageUrl,
    } = req.body

    const token = await loginService.login(
      googleId,
      email,
      name,
      googleAccessToken,
      imageUrl,
    )
    await userService.setUserInfo(googleId, email, imageUrl)
    res.cookie(cookieName, token, cookieConfig)
    response(res)
  } catch (e) {
    next(e)
  }
}
const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie(cookieName, { path: '/' })
    response(res)
  } catch (e) {
    next(e)
  }
}

const getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      throw httpError.UNAUTHORIZED
    }
    const { googleId } = req.decodedUser
    const user = await userService.findByGoogleId(googleId)
    if (!user) {
      throw httpError.USER_NOT_FOUND
    }

    response(res, user)
  } catch (e) {
    next(e)
  }
}

export {
  login, getUserInfo, logout,
}
