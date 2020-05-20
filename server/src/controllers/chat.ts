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
      rooms = await chatService.findRoomByUuid(roomId)
    } else {
      const { googleId } = req.decodedUser!

      const user = await userService.findByGoogleId(googleId)
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

export const addMessage = async (req:Request, res: Response, next: NextFunction) => {
  try {
    const { roomUuid } = req.params
    const {
      content, createdAt, updatedAt,
    } = req.body
    const room = await chatService.findRoomByUuid(roomUuid)
    const user = await userService.findByGoogleId(req.decodedUser.googleId)
    if (!room || !user) {
      throw createError(httpStatus.NOT_FOUND, '뭔가 잘못되었습니다.')
    }
    const roomParticipants = await chatService.findRoomParticipants(room.id, user.id)
    if (!roomParticipants) {
      throw createError(httpStatus.NOT_FOUND, '뭔가 잘못되었습니다.')
    }
    const roomParticipantsId = roomParticipants.id
    if (!roomParticipants) {
      throw createError(httpStatus.NOT_FOUND, '뭔가 잘못되었습니다.')
    }

    const data = await chatService.createChat({
      roomParticipantsId, content, createdAt, updatedAt,
    })
    response(res, data)
  } catch (e) {
    next(e)
  }
}
