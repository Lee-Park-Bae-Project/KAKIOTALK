
import { Response } from 'express'
import httpStatus from 'http-status'
import uuid4 from 'uuid4'

const response = (res:Response, data = {}, code = httpStatus.OK) => {
  let result = {
    success: true,
    data: {},
  }

  if (code > 399) {
    result.success = false
    // code = httpStatus.OK;
  }

  if (typeof data === 'object') {
    result = {
      ...result, data,
    }
  }

  return res.status(code).json(result)
}

const uuid = () => {
  const tokens = uuid4().split('-')
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
}

 const message = {
  INVALID_GOOGLE_ID:'계정이 유효하지 않습니다.',
  INVALID_EMAIL:'유효하지 않은 이메일입니다.',
  INVALID_FRIEND_ID:'친구의 계정이 유효하지 않습니다.',
  LOGIN_REQUIRED:'로그인이 필요합니다.',
  ERROR_OCCURED:'오류가 발생했습니다.',
  ALREADY_EXIST_FRIEND: '이미 추가되어 있는 친구입니다.'
 }  
export {
  uuid,
  response,
  message
}
