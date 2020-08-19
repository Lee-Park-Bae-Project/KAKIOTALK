/* eslint-disable camelcase */
import * as userService from './user'
import { GOOGLE_LOGIN_ERROR } from '../common/error'
import * as request from '../common/request'
import { signJwt } from '../common/utils'

interface LoginArgs {
  googleId: string
  email: string
  name: string
  googleAccessToken: string
  googleRefreshToken: string
  imageUrl: string
}
interface Login {
  (args: LoginArgs) : Promise<string>
}
export const login: Login = async ({
  email, googleAccessToken, googleId, imageUrl, name, googleRefreshToken,
}) => {
  userService.findOrCreate({
    googleId,
    name,
    email,
    googleAccessToken,
    imageUrl,
    googleRefreshToken,
  })

  const payload = { googleId }
  // const accessToken = jwt.sign(payload, config.jwtConfig.secret, { expiresIn: config.jwtConfig.ttl })
  const accessToken = signJwt({ payload })
  // const accessToken = jwt.sign(payload, jwtConfig.secret, { expiresIn: 0 })

  await userService.setAccessToken(googleId, accessToken)

  return accessToken
}

export const refreshAccessToken = async (googleId: string, refreshToken: string) => {
  try {
    const { access_token } = await request.refreshAccessToken(refreshToken)
    const newUserProfile = await userService.setAccessToken(googleId, access_token)
  } catch (e) {
    throw GOOGLE_LOGIN_ERROR
  }
}

export const getTokenFromGoogle = async (code: string) => {
  const {
    access_token: googleAccessToken,
    refresh_token: googleRefreshToken,
  } = await request.getTokenFromGoogle(code)
  return {
    googleAccessToken,
    googleRefreshToken,
  }
}

export const getProfileFromGoogle = async (googleAccessToken: string) => {
  const {
    id: googleId,
    email,
    name,
    picture: imageUrl,
  } = await request.getProfileFromGoogle(googleAccessToken)

  return {
    googleId,
    email,
    name,
    imageUrl,
  }
}
