import { models } from '../models'

export const findByGoogleId = (googleId: string) => models.User.findOne({ where: { googleId } })
export const createUser = (googleId: string) => models.User.create({ googleId })

export const findOrCreate = (
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
export const setAccessToken = (googleId: string, accessToken: string) => models.User.update(
  { accessToken },
  {
    where: { googleId },
    returning: true,
  },
)
export const setUserInfo = (googleId: string, name: string, email: string) => models.User.update(
  {
    name,
    email,
  },
  {
    where: { googleId },
    returning: true,
  },
)
