
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

export {
  uuid,
  response,
}
