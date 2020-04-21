import { models } from '../models'
import { UserStatic } from '../models/user'

export const signUp = (name: string, email: string) => models.User.create({
  name,
  email,
})

export const withdrawal = () => {

}
