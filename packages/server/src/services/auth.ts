import jwt from 'jsonwebtoken'
import * as userService from './user'
import { jwtConfig } from '../configs'

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
const login: Login = async ({
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

  await userService.setAccessToken(googleId, accessToken)

  return accessToken
}

export default { login }
