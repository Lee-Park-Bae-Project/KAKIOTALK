import request from '../common/request'
import UserService from './userService'
// TODO: Refactoring
const login = async (googleId: string, accessToken: string) => {
  let user = await UserService.findByGoogleId(googleId)
  if (user) {
    const { data } = await request.getUserInfo(accessToken)
    await UserService.setAccessToken(googleId, accessToken)
    await UserService.setUserInfo(googleId, data.name, data.email)
    user = await UserService.findByGoogleId(googleId)
    return user
  }
  user = await UserService.createUser(googleId)
  const { data } = await request.getUserInfo(accessToken)
  await UserService.setAccessToken(googleId, accessToken)
  await UserService.setUserInfo(googleId, data.name, data.email)
  user = await UserService.findByGoogleId(googleId)
  return user
}

export default { login }
