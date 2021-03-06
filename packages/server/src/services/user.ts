import { models } from '../models'

export const findByGoogleId = (googleId: string) => models.User.findOne({ where: { googleId } })
export const findByUuid = (uuid: string) => models.User.findOne({ where: { uuid } })
export const createUser = (googleId: string) => models.User.create({ googleId })
export const findByAccessToken = (accessToken: string) => models.User.findOne({ where: { accessToken } })
export const findByEmail = (email: string) => models.User.findOne({ where: { email } })
export const findById = (id: number) => models.User.findOne({ where: { id } })
export const findOrCreate = (
  googleId: string,
  name: string,
  email: string,
  googleAccessToken: string,
  imageUrl:string,
) => models.User.findOrCreate({
  where: { googleId },
  defaults: {
    googleId,
    name,
    email,
    googleAccessToken,
    imageUrl,
  },
})
export const setAccessToken = (googleId: string, accessToken: string) => models.User.update(
  { accessToken },
  {
    where: { googleId },
    returning: true,
  }
)
export const setUserInfo = (
  googleId: string,
  email:string,
  imageUrl:string
) => models.User.update(
  {
    email,
    imageUrl,
  },
  { where: { googleId } }
)

export const updateProfile = (
  googleId: string,
  name: string,
  statusMessage:string,
) => models.User.update(
  {
    name,
    statusMessage,
  },
  { where: { googleId } }
)
