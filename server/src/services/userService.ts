import { models } from '../models'

const findByGoogleId = (googleId: string) => models.User.findOne({ where: { googleId } })
const createUser = (googleId: string) => models.User.create({ googleId })

const findOrCreate = (
  googleId: string,
  name: string,
  email: string,
  googleAccessToken: string
) => models.User.findOrCreate(
  {
    where: { googleId },
    defaults: {
      googleId,
      name,
      email,
      googleAccessToken,
    },
  },

)
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
  findOrCreate,
}
