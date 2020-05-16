import {
  NextFunction, Request, Response,
} from 'express'
import createError from 'http-errors'
import httpStatus from 'http-status'
import * as chatService from '../services/chat'
import * as userService from '../services/userService'
import { response } from '../common/utils'

export const getChats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { roomId } = req.params
    const chats = await chatService.getChatsByRoomId(roomId)
    if (chats.length === 0) {
      return next(createError(404, '방 정보가 없습니다.'))
    }
    response(res, chats)
  } catch (e) {
    next(e)
  }
}

export const getRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { roomId } = req.params
    let rooms
    if (roomId) {
      rooms = await chatService.findRoomById(roomId)
    } else {
      const { googleId } = req.decodedUser!

      const user: any = await userService.findByGoogleId(googleId)
      if (!user) {
        return next(createError(httpStatus.NOT_FOUND, '사용자를 찾을 수 없습니다.'))
      }
      rooms = await chatService.findAllRooms(user.id)
    }

    response(res, rooms)
  } catch (e) {
    next(e)
  }
}

