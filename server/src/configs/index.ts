import {CorsOptions} from 'cors';
const whiteList = [
  'http://localhost:3000',
]
export const corsConfig: CorsOptions = {
    origin: whiteList,
    credentials: true,
}