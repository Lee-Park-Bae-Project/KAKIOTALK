import {
  NextFunction, Request, Response,
} from 'express'
import { models } from '../models'

const userTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await models.User.create({
      id: `${Date.now()}`,
      name: 'name',
      email: '123',
    })

    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

const chatTest = async (req: Request, res: Response, next: NextFunction) => {

}

export {
  userTest, chatTest,
}
