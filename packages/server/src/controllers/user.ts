import {
  NextFunction, Request, Response,
} from 'express'
import createError from 'http-errors'
import { models } from '../models'
import {
  message, response,
} from '../common/utils'
import * as userService from '../services/user'

const getMyProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.decodedUser) {
      return next(createError(401, message.LOGIN_REQUIRED))
    }
    const user = await userService.findByGoogleId(req.decodedUser.googleId)
    if (!user) throw createError(401, message.INVALID_GOOGLE_ID)
    const {
      uuid, email, name, statusMessage,
    } = user
    const myProfile = {
      uuid,
      email,
      name,
      statusMessage,
    }
    response(res, myProfile)
  } catch (e) {
    next(e)
  }
}
const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.decodedUser) {
      return next(createError(401, message.LOGIN_REQUIRED))
    }
    await userService.setUserInfo(
      req.decodedUser.googleId,
      req.body.name,
      req.body.statusMessage
    )
    const updatedUser = await userService.findByGoogleId(
      req.decodedUser.googleId
    )
    if (!updatedUser) throw createError(401, message.INVALID_GOOGLE_ID)
    const {
      name, uuid, email, statusMessage,
    } = updatedUser
    response(res, {
      name, uuid, email, statusMessage,
    })
  } catch (e) {
    next(e)
  }
}
export {
  getMyProfile, updateProfile,
}