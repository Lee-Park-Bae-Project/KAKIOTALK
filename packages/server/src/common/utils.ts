
import httpStatus from 'http-status'
import uuid4 from 'uuid4'
import {
  NextFunction, Request, Response,
} from 'express'
import { Controller } from '../types'
import { ERROR_OCCURED } from './error'

export const response = (res:Response, data: any = {}, _code = httpStatus.OK) => {
  let result = {
    success: true,
    data: {},
    message: '',
  }
  let code = _code

  if (_code > 399) {
    result.success = false
    result.message = data.message
    code = httpStatus.OK
  }

  if (_code < 400 && typeof data === 'object') {
    result = {
      ...result,
      data,
    }
  }
  return res.status(code).json(result)
}

export const uuid = () => {
  const tokens = uuid4().split('-')
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
}

export const controllerHelper = (controller: Controller) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await controller(req, res, next)
    response(res, data)
  } catch (e) {
    next(e)
  }
}

export type ControllerCallBackType = (req: Request, res: Response, next: NextFunction) => any
export type ControllerType = (req: Request, res: Response, next: NextFunction) => void

export function controllerWrapper(cb: ControllerCallBackType) {
  const controller: ControllerType = async (req, res, next) => {
    try {
      const data = await cb(req, res, next)
      response(res, data)
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return controller
}
