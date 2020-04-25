import {
  NextFunction, Request, Response,
} from 'express'
import {
  cookieConfig, cookieName,
} from '../configs'
import { response } from '../common/utils'
import loginService from '../services/auth'

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      googleId,
      email,
      name,
      googleAccessToken,
    } = req.body

    const token = await loginService.login(googleId, name, email, googleAccessToken)

    res.cookie(cookieName, token, cookieConfig)

    response(res)
  } catch (e) {
    next(e)
  }
}

export default login
