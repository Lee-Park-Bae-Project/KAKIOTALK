import jwt from 'jsonwebtoken'
import request from '../common/request'
import userService from './userService'
import { jwtConfig } from '../configs'

const login = async (
  googleId: string,
  email: string,
  name: string,
  googleAccessToken: string,
) => {
  userService.findOrCreate(
    googleId,
    name,
    email,
    googleAccessToken,
  )

  const payload = { googleId }
  const accessToken = jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.ttl })

  await userService.setAccessToken(googleId, accessToken)

  return accessToken
}

export default { login }
