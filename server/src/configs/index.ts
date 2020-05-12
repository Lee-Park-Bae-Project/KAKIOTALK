import { CorsOptions } from 'cors'
import { CookieOptions } from 'express'

require('dotenv').config()

export const env = process.env.NODE_ENV

const whiteList = ['http://localhost:3000']
export const corsConfig: CorsOptions = {
  origin: whiteList,
  credentials: true,
}

export const cookieConfig: CookieOptions = {
  httpOnly: true,
  maxAge: env === 'development' ? 1000 * 60 * 60 * 20000 : 1000 * 60 * 60 * 20,
}
export const cookieName = 'kakio_jwt'

export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'secret',
  ttl: '2h',
}
