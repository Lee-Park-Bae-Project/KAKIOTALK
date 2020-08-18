import { ApiTypes } from '@kakio/common'
import {
  NextFunction, Request, Response,
} from 'express'
import { controllerWrapper } from '../common/utils'
import * as userService from '../services/user'
import * as httpError from '../common/error'

interface Profile {
  name:string
}
export const getMyProfile = controllerWrapper(async (req, res, next) => {
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

  const ret: ApiTypes.Profile = {
    uuid,
    email,
    name,
    statusMessage,
    imageUrl,
  }
  return ret
})

export const updateProfile = controllerWrapper(async (req, res, next) => {
  if (!req.decodedUser) {
    throw httpError.UNAUTHORIZED
  }
  await userService.updateProfile(
    req.decodedUser.googleId,
    req.body.name,
    req.body.statusMessage
  )
  const updatedUser = await userService.findByGoogleId(req.decodedUser.googleId)
  if (!updatedUser) {
    throw httpError.INVALID_GOOGLE_ID
  }

  const {
    name, uuid, email, statusMessage, imageUrl,
  } = updatedUser
  const ret: ApiTypes.Profile = {
    name,
    uuid,
    email,
    statusMessage,
    imageUrl,
  }
  return ret
})
