import { CorsOptions } from 'cors'
import { CookieOptions } from 'express'
import { Utils } from '@kakio/common'

require('dotenv').config()

export const env = process.env.NODE_ENV || 'development'
const whiteList = [
  'http://localhost:3000',
  'https://kakiotalk.now.sh',
  'https://kakiotalk.junow.vercel.app',
]
export const corsConfig: CorsOptions = {
  origin: whiteList,
  credentials: true,
}

const maxAge = Utils.isProduction() ? (1000 * 60 * 60 * 20) : (1000 * 60 * 60 * 20000)

export const cookieConfig: CookieOptions = {
  httpOnly: true,
  maxAge,
}
export const cookieName = 'kakio_jwt'

export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'secret',
  ttl: process.env.NODE_ENV === 'development' ? '100h' : '2h',
}

export const CLIENT_URL = Utils.isProduction() ? 'https://kakiotalk.now.sh' : 'http://localhost:3000'
export const SERVER_URL = Utils.isProduction() ? 'https://kakio.site' : 'http://localhost:3050'
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? ''
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? ''
export const REDIRECT_URL = `${SERVER_URL}/v1/auth/google/callback`
export const LOGIN_SUCCESS_URL = `${CLIENT_URL}/login?login=true`

export const GOOGLE_LOGIN_URL = 'https://accounts.google.com/o/oauth2/v2/auth?'
+ `client_id=${GOOGLE_CLIENT_ID}&`
+ `redirect_uri=${REDIRECT_URL}&`
+ 'response_type=code&'
+ 'scope=https://www.googleapis.com/auth/userinfo.profile&'
+ 'access_type=offline&'
+ 'prompt=select_account&'
+ 'include_granted_scopes=true'

export const GOOGLE_TOKEN_URL = (code: string) => 'https://oauth2.googleapis.com/token?'
+ `client_id=${GOOGLE_CLIENT_ID}&`
+ `client_secret=${GOOGLE_CLIENT_SECRET}&`
+ `code=${code}&`
+ 'grant_type=authorization_code&'
+ `redirect_uri=${REDIRECT_URL}`

export const GOOGLE_PROFILE_URL = (googleAccessToken: string) => `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${googleAccessToken}`
