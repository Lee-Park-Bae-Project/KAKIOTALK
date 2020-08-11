
import { Response } from 'express'
import httpStatus from 'http-status'
import uuid4 from 'uuid4'
import { ControllerHelper } from '../types'

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

export const controllerHelper: ControllerHelper = (controller) => async (req, res, next) => {
  try {
    const data = await controller(req, res, next)
    response(res, data)
  } catch (e) {
    console.error(e)
    next(e)
  }
}
