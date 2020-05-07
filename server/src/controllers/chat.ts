import {
  NextFunction, Request, Response,
} from 'express'

import * as chatService from '../services/chat'
import { response } from '../common/utils'

export const getChats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { roomId } = req.params
    const chats = await chatService.getChatsByRoomId(roomId)
    response(res, chats)
  } catch (e) {
    next(e)
  }
}

export const getRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { roomId } = req.params
    const room = await chatService.findRoomById(roomId)

    response(res, room)
  } catch (e) {
    next(e)
  }
}

