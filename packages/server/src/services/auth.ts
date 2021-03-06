import jwt from 'jsonwebtoken'
import * as userService from './user'
import { jwtConfig } from '../configs'

const login = async (
  googleId: string,
  email: string,
  name: string,
  googleAccessToken: string,
  imageUrl:string,
) => {
  userService.findOrCreate(
    googleId,
    name,
    email,
    googleAccessToken,
    imageUrl,
  )

  const payload = { googleId }
  const accessToken = jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.ttl })

  await userService.setAccessToken(googleId, accessToken)

  return accessToken
}

export default { login }
