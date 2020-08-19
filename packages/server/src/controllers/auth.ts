import {
  NextFunction, Request, Response,
} from 'express'
import axios from 'axios'
import { Utils } from '@kakio/common'
import * as userService from '../services/user'
import * as config from '../configs'
import {
  controllerHelper, response,
} from '../common/utils'
import * as authService from '../services/auth'
import * as httpError from '../common/error'

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie(config.cookieName, { path: '/' })
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

export const googleLogin = controllerHelper(async (req: Request, res: Response, next: NextFunction) => ({ loginUrl: config.GOOGLE_LOGIN_URL }))

export const googleLoginCallback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      error, code,
    } = req.query

    if (error) throw httpError.GOOGLE_LOGIN_ERROR
    if (!Utils.isString(code)) throw httpError.GOOGLE_LOGIN_ERROR

    const {
      googleAccessToken, googleRefreshToken,
    } = await authService.getTokenFromGoogle(code as string)

    const {
      email, googleId, imageUrl, name,
    } = await authService.getProfileFromGoogle(googleAccessToken)

    const token = await authService.login({
      googleId,
      name,
      email,
      imageUrl,
      googleAccessToken,
      googleRefreshToken,
    })

    await userService.setUserInfo({
      email, googleAccessToken, googleId, googleRefreshToken, imageUrl, name,
    })
    res.cookie(config.cookieName, token, config.cookieConfig)
    res.redirect(config.LOGIN_SUCCESS_URL)
  } catch (e) {
    next(e)
  }
}
export {
  getUserInfo, logout,
}
