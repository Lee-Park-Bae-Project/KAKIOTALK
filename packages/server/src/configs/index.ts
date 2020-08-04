import { CorsOptions } from 'cors'
import { CookieOptions } from 'express'

require('dotenv').config()

export const env = process.env.NODE_ENV || 'development'

const whiteList = ['http://localhost:3000', 'https://kakiotalk.now.sh', 'https://kakiotalk.junow.vercel.app']
export const corsConfig: CorsOptions = {
  origin: whiteList,
  credentials: true,
}

const maxAge = env === 'development' ? 1000 * 60 * 60 * 20000 : 1000 * 60 * 60 * 20

export const cookieConfig: CookieOptions = {
  httpOnly: true,
  maxAge,
}
export const cookieName = 'kakio_jwt'

export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'secret',
  ttl: process.env.NODE_ENV === 'development' ? '100h' : '2h',
}
