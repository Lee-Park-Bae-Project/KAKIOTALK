import _he from 'http-errors'
import _code from 'http-status'

/**
 * @code
 * NOT FOUND (404)
 * @message
 * 방 정보가 없습니다.
 */
export const ROOM_NOT_FOUND = _he(_code.NOT_FOUND, '방 정보가 없습니다.')

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

/**
 * @code
 * NOT FOUND (400)
 * @message
 * 잘못된 요청입니다.
 */
export const BAD_REQUEST = _he(_code.BAD_REQUEST, '잘못된 요청입니다.')

/**
 * @code
 * NOT FOUND (404)
 * @message
 * 방이 만들어지지 않았습니다.
 */
export const ROOM_NOT_MADE = _he(_code.NOT_FOUND, '방이 만들어지지 않았습니다.')

/**
 * @code
 * NOT FOUND (400)
 * @message
 * 방에 유저를 추가 할 수 없습니다.
 */
export const CANNOT_ADD_ROOM_PARTICIPANT = _he(_code.BAD_REQUEST, '잘못된 요청입니다.')

/**
 * NOT FOUND (406)
 * @message
 * 잘못된 요청입니다.
 */
export const CAN_NOT_BE_DONE = _he(_code.NOT_ACCEPTABLE, '요청을 완료하지 못했습니다.')

export const INVALID_GOOGLE_ID = _he(_code.UNAUTHORIZED, '계정이 유효하지 않습니다.')

export const CAN_NOT_ADD_ME = _he(_code.UNAUTHORIZED, '본인은 친구로 추가할 수 없습니다.')

export const INVALID_EMAIL = _he(_code.UNAUTHORIZED, '유효하지 않은 이메일입니다.')

export const ALREADY_EXIST_FRIEND = _he(_code.UNAUTHORIZED, '이미 추가되어 있는 친구입니다.')

export const INVALID_FRIEND_ID = _he(_code.UNAUTHORIZED, '친구의 계정이 유효하지 않습니다.')

export const ERROR_OCCURED = _he(_code.UNAUTHORIZED, '오류가 발생했습니다.')
