import * as userService from '../services/user'
import {
  cookieConfig, cookieName,
} from '../configs'
import { controllerWrapper } from '../common/utils'
import loginService from '../services/auth'
import * as httpError from '../common/error'

export const login = controllerWrapper(async (req, res, next) => {
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
  return {}
})

export const logout = controllerWrapper(async (req, res, next) => {
  res.clearCookie(cookieName, { path: '/' })
  return {}
})

export const getUserInfo = controllerWrapper(async (req, res, next) => {
  if (!req.decodedUser) {
    throw httpError.UNAUTHORIZED
  }
  const { googleId } = req.decodedUser
  const user = await userService.findByGoogleId(googleId)
  if (!user) {
    throw httpError.USER_NOT_FOUND
  }

  return user
})
