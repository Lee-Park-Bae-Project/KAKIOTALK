import _he from 'http-errors'
import _code from 'http-status'

export const ROOM_NOT_FOUND = _he(_code.NOT_FOUND, '방정보가 없습니다.')

/**
 * @code
 * NOT FOUND (404)
 * @message
 * 데이터를 찾을 수 없습니다.
 */
export const DATA_NOT_FOUND = _he(_code.NOT_FOUND, '데이터를 찾을 수 없습니다.')

/**
 * @code
 * UNAUTHORIZED (401)
 * @message
 * 유저정보를 찾을 수 없습니다.
 */
export const USER_NOT_FOUND = _he(_code.UNAUTHORIZED, '유저정보를 찾을 수 없습니다.')

/**
 * @code
 * UNAUTHORIZED (401)
 * @message
 * 로그인이 필요한 서비스입니다
 */
export const UNAUTHORIZED = _he(_code.UNAUTHORIZED, '로그인이 필요한 서비스입니다.')

/**
 * @code
 * NOT FOUND (404)
 * @message
 * 무언가 잘못되었습니다.
 */
export const IDK = _he(_code.NOT_FOUND, '무언가 잘못되었습니다.')
