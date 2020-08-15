import {
  NextFunction, Request, Response,
} from 'express'
import { ApiTypes } from '@kakio/common'
import { response } from '../common/utils'
import * as userService from '../services/user'
import * as httpError from '../common/error'

export const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      throw httpError.UNAUTHORIZED
    }
    const user = await userService.findByGoogleId(req.decodedUser.googleId)

    if (!user) {
      throw httpError.INVALID_GOOGLE_ID
    }
    const {
      uuid, email, name, statusMessage, imageUrl,
    } = user

    const myProfile: ApiTypes.Profile = {
      uuid,
      email,
      name,
      statusMessage,
      imageUrl,
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
      throw httpError.UNAUTHORIZED
    }
    await userService.updateProfile(
      req.decodedUser.googleId,
      req.body.name,
      req.body.statusMessage
    )
    const updatedUser = await userService.findByGoogleId(
      req.decodedUser.googleId
    )
    if (!updatedUser) {
      throw httpError.INVALID_GOOGLE_ID
    }
    const {
      name, uuid, email, statusMessage, imageUrl,
    } = updatedUser
    response(res, {
      name, uuid, email, statusMessage, imageUrl,
    })
  } catch (e) {
    next(e)
  }
}
export { updateProfile }
