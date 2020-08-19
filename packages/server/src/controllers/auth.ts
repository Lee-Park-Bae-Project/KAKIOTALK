import {
  NextFunction, Request, Response,
} from 'express'
import axios from 'axios'
import * as userService from '../services/user'
import {
  cookieConfig, cookieName,

  GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URL,
} from '../configs'
import {
  controllerHelper, response,
} from '../common/utils'
import loginService from '../services/auth'
import * as httpError from '../common/error'

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie(cookieName, { path: '/' })
    response(res)
  } catch (e) {
    next(e)
  }
}

const getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      throw httpError.UNAUTHORIZED
    }
    const { googleId } = req.decodedUser
    const user = await userService.findByGoogleId(googleId)
    if (!user) {
      throw httpError.USER_NOT_FOUND
    }

    response(res, user)
  } catch (e) {
    next(e)
  }
}

export const googleLogin = controllerHelper(async (req: Request, res: Response, next: NextFunction) => {
  const uri = 'https://accounts.google.com/o/oauth2/v2/auth?'
    + `client_id=${GOOGLE_CLIENT_ID}&`
    + `redirect_uri=${REDIRECT_URL}&`
    + 'response_type=code&'
    + 'scope=https://www.googleapis.com/auth/userinfo.profile&'
    + 'access_type=offline&'
    + 'prompt=select_account&'
    + 'include_granted_scopes=true'
    // res.redirect('https://naver.com')
  return { loginUrl: uri }
})

export const googleLoginCallback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      error, code,
    } = req.query

    if (error) {
      throw new Error('this is google error')
    }
    const uri = 'https://oauth2.googleapis.com/token?'
  + `client_id=${GOOGLE_CLIENT_ID}&`
  + `client_secret=${GOOGLE_CLIENT_SECRET}&`
  + `code=${code}&`
  + 'grant_type=authorization_code&'
  + `redirect_uri=${REDIRECT_URL}`

    const tokenResponse = await axios.post(uri)

    const {
      access_token: googleAccessToken,
      refresh_token: googleRefreshToken,
    } = tokenResponse.data

    const profileResponse = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${googleAccessToken}`)
    const {
      id: googleId, email, name, picture: imageUrl,
    } = profileResponse.data
    const token = await loginService.login({
      googleId,
      name,
      email,
      imageUrl,
      googleAccessToken,
      googleRefreshToken,
    })

    await userService.setUserInfo({
      email, googleAccessToken, googleId, googleRefreshToken, imageUrl, name,
    })
    res.cookie(cookieName, token, cookieConfig)
    res.redirect('http://localhost:3000/login?login=true')
  } catch (e) {
    next(e)
  }
}
export {
  getUserInfo, logout,
}
