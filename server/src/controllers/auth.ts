import {
  NextFunction, Request, Response,
} from 'express'
import { response } from '../common/utils'
import LoginService from '../services/auth'

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      googleId, accessToken,
    } = req.body

    const userInfo = await LoginService.login(googleId, accessToken)

    response(res, userInfo)
  } catch (e) {
    next(e)
  }
}

export { login }
