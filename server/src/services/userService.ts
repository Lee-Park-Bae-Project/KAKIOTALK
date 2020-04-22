import { models } from '../models'

const findByGoogleId = (googleId: string) => models.User.findOne({ where: { googleId } })
const createUser = (googleId: string) => models.User.create({ googleId })
const setAccessToken = (googleId: string, accessToken: string) => models.User.update(
  { accessToken },
  {
    where: { googleId },
    returning: true,
  },
)
const setUserInfo = (googleId: string, name: string, email: string) => models.User.update(
  {
    name,
    email,
  },
  {
    where: { googleId },
    returning: true,
  },
)

export default {
  findByGoogleId,
  createUser,
  setAccessToken,
  setUserInfo,
}
