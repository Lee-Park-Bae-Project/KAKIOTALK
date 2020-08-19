import _he from 'http-errors'
import _code from 'http-status'

const ERROR_CODE = _code.INTERNAL_SERVER_ERROR
/**
 * @message
 * 방 정보가 없습니다.
 */
export const ROOM_NOT_FOUND = _he(ERROR_CODE, '방 정보가 없습니다.')

/**
 * @message
 * 데이터를 찾을 수 없습니다.
 */
export const DATA_NOT_FOUND = _he(ERROR_CODE, '데이터를 찾을 수 없습니다.')

/**
 * @message
 * 유저정보를 찾을 수 없습니다.
 */
export const USER_NOT_FOUND = _he(ERROR_CODE, '유저정보를 찾을 수 없습니다.')

/**
 * @message
 * 로그인이 필요한 서비스입니다
 */
export const UNAUTHORIZED = _he(ERROR_CODE, '로그인이 필요한 서비스입니다.')

/**
 * @message
 * 무언가 잘못되었습니다.
 */
export const IDK = _he(ERROR_CODE, '무언가 잘못되었습니다.')

/**
 * @message
 * 잘못된 요청입니다.
 */
export const BAD_REQUEST = _he(ERROR_CODE, '잘못된 요청입니다.')

/**
 * @message
 * 방이 만들어지지 않았습니다.
 */
export const ROOM_NOT_MADE = _he(ERROR_CODE, '방이 만들어지지 않았습니다.')

/**
 * @message
 * 방에 유저를 추가 할 수 없습니다.
 */
export const CANNOT_ADD_ROOM_PARTICIPANT = _he(ERROR_CODE, '잘못된 요청입니다.')

/**
 * @message
 * 잘못된 요청입니다.
 */
export const CAN_NOT_BE_DONE = _he(ERROR_CODE, '요청을 완료하지 못했습니다.')

/**
 * @message
 * 계정이 유효하지 않습니다.
 */
export const INVALID_GOOGLE_ID = _he(ERROR_CODE, '계정이 유효하지 않습니다.')

/**
 * @message
 * 본인은 친구로 추가할 수 없습니다.
 */
export const CAN_NOT_ADD_ME = _he(ERROR_CODE, '본인은 친구로 추가할 수 없습니다.')

/**
 * @message
 * 유효하지 않은 이메일입니다.
 */
export const INVALID_EMAIL = _he(ERROR_CODE, '유효하지 않은 이메일입니다.')

/**
 * @message
 * 이미 추가되어 있는 친구입니다.
 */
export const ALREADY_EXIST_FRIEND = _he(ERROR_CODE, '이미 추가되어 있는 친구입니다.')

/**
 * @message
 * 친구의 계정이 유효하지 않습니다.
 */
export const INVALID_FRIEND_ID = _he(ERROR_CODE, '친구의 계정이 유효하지 않습니다.')

/**
 * @message
 * 오류가 발생했습니다.
 */
export const ERROR_OCCURED = _he(ERROR_CODE, '오류가 발생했습니다.')

/**
 * @message
 * 구글 로그인을 이용할 수 없습니다.
 */
export const GOOGLE_LOGIN_ERROR = _he(ERROR_CODE, '구글 로그인을 이용할 수 없습니다.')
