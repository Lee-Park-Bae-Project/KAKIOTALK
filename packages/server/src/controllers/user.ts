import { ApiTypes } from '@kakio/common'
import { controllerHelperTest } from '../common/utils'
import * as userService from '../services/user'
import * as httpError from '../common/error'

export const getMyProfile = controllerHelperTest(async (req, res, next): Promise<ApiTypes.Profile> => {
  if (!req.decodedUser) {
    throw httpError.UNAUTHORIZED
  }
  const user = await userService.findByGoogleId(req.decodedUser.googleId)

  if (!user) {
    throw httpError.INVALID_GOOGLE_ID
  }
  const {
    uuid, email, name, statusMessage, imageUrl, accessToken,
  } = user

  return {
    uuid,
    email,
    name,
    statusMessage,
    imageUrl,
  }
})

export const updateProfile = controllerHelperTest(async (req, res, next): Promise<ApiTypes.Profile> => {
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

  return {
    name,
    uuid,
    email,
    statusMessage,
    imageUrl,
  }
})
