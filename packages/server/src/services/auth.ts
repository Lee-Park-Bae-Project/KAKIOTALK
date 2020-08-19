/* eslint-disable camelcase */
import jwt from 'jsonwebtoken'
import axios from 'axios'
import * as userService from './user'
import {
  GOOGLE_TOKEN_REFRESH_URL, jwtConfig,
} from '../configs'
import { GOOGLE_LOGIN_ERROR } from '../common/error'

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
  const accessToken = jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.ttl })
  // const accessToken = jwt.sign(payload, jwtConfig.secret, { expiresIn: 0 })

  await userService.setAccessToken(googleId, accessToken)

  return accessToken
}

export const refreshAccessToken = async (googleId: string, refreshToken: string) => {
  try {
    const response = await axios.get<{
      access_token: string
      expires_in: number
      scope: string
      token_type: string
    }>(GOOGLE_TOKEN_REFRESH_URL(refreshToken))
    const { access_token } = response.data
    const newUserProfile = await userService.setAccessToken(googleId, access_token)
  } catch (e) {
    throw GOOGLE_LOGIN_ERROR
  }
}
