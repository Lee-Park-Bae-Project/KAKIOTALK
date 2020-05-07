import { models } from '../models'
import { access } from 'fs'

const findByGoogleId = (googleId: string) => models.User.findOne({ where: { googleId } })
const findByAccessToken = (accessToken:string) => models.User.findOne({where:{accessToken}})
const findByEmail = (email:string)=>models.User.findOne({where:{email}})
const createUser = (googleId: string) => models.User.create({ googleId })
const findById = (id:number) => models.User.findOne({where:{id}})
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
  findByAccessToken,
  createUser,
  setAccessToken,
  setUserInfo,
  findOrCreate,
  findByEmail,
  findById
}
