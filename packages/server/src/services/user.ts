import { models } from '../models'

export const findByGoogleId = (googleId: string) => models.User.findOne({ where: { googleId } })
export const findByUuid = (uuid: string) => models.User.findOne({ where: { uuid } })
export const createUser = (googleId: string) => models.User.create({ googleId })
export const findByAccessToken = (accessToken: string) => models.User.findOne({ where: { accessToken } })
export const findByEmail = (email: string) => models.User.findOne({ where: { email } })
export const findById = (id: number) => models.User.findOne({ where: { id } })

interface FindOrCreateArgs {
  googleId: string,
  name: string,
  email: string,
  imageUrl:string,
  googleAccessToken: string,
  googleRefreshToken: string
}
export const findOrCreate = ({
  email, googleAccessToken, googleId, googleRefreshToken, imageUrl, name,
}: FindOrCreateArgs) => models.User.findOrCreate({
  where: { googleId },
  defaults: {
    googleId,
    name,
    email,
    googleAccessToken,
    imageUrl,
    googleRefreshToken,
  },
})

export const setAccessToken = (googleId: string, accessToken: string) => models.User.update(
  { accessToken },
  {
    where: { googleId },
    returning: true,
  }
)

interface SetUserInfoArgs {
  googleId: string
  email: string
  name: string
  imageUrl: string
  googleAccessToken: string
  googleRefreshToken: string
}

export const setUserInfo = ({
  googleId,
  email,
  imageUrl,
  googleAccessToken,
  googleRefreshToken,
  name,
}: SetUserInfoArgs) => models.User.update(
  {
    email,
    imageUrl,
    googleAccessToken,
    googleRefreshToken,
    name,
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
