import { CorsOptions } from 'cors'

require('dotenv').config()

export const env = process.env.NODE_ENV

const whiteList = [
  'http://localhost:3000',
]
export const corsConfig: CorsOptions = {
  origin: whiteList,
  credentials: true,
}

export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'secret',
  ttl: '2h',
}
