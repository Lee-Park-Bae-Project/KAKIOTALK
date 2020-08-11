
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

export const message = {
  INVALID_GOOGLE_ID: '계정이 유효하지 않습니다.',
  INVALID_EMAIL: '유효하지 않은 이메일입니다.',
  INVALID_FRIEND_ID: '친구의 계정이 유효하지 않습니다.',
  LOGIN_REQUIRED: '로그인이 필요합니다.',
  ERROR_OCCURED: '오류가 발생했습니다.',
  ALREADY_EXIST_FRIEND: '이미 추가되어 있는 친구입니다.',
  CAN_NOT_ADD_ME: '본인은 친구로 추가할 수 없습니다.',
}
