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
