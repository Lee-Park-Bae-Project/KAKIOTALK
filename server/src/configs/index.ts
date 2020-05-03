<<<<<<< HEAD
import { CorsOptions } from 'cors';
=======
import { CorsOptions } from 'cors'
import { CookieOptions } from 'express'
>>>>>>> 8b30815cade8a139431deced16a8ec4f47d40949

require('dotenv').config();

export const env =
  process.env.NODE_ENV;

const whiteList = [
  'http://localhost:3000',
];
export const corsConfig: CorsOptions = {
  origin: whiteList,
  credentials: true,
<<<<<<< HEAD
};
=======
}

export const cookieConfig: CookieOptions = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 20,
}
export const cookieName = 'kakio_jwt'

export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'secret',
  ttl: '2h',
}
>>>>>>> 8b30815cade8a139431deced16a8ec4f47d40949
