import { CorsOptions } from 'cors'
import { CookieOptions } from 'express'
import { ClientOpts } from 'redis'

require('dotenv').config()

export const env = process.env.NODE_ENV || 'development'

const whiteList = ['http://lee-park-bae-project.github.io']
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

export const getRedisOpts = () => {
  const redisOpts: {[key: string]: ClientOpts } = {
    production: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT || 6379),
      db: process.env.REDIS_DB,
    },
    development: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT || 6379),
      db: process.env.REDIS_DB_DEV,
    },
    test: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT || 6379),
      db: process.env.REDIS_DB_TEST,
    },
  }
  return redisOpts[String(process.env.NODE_ENV || 'development')]
}
