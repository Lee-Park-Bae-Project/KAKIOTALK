
import * as chatService from '../services/chat'
import * as userService from '../services/userService'
import { controllerHelper } from '../common/utils'
import * as Error from '../common/error'

export const getChats = controllerHelper(async (req, res, next) => {
  const { roomId } = req.params
  const chats = await chatService.getChatsByRoomId(roomId)
  if (!chats) {
    throw Error.ROOM_NOT_FOUND
  }

  return chats
})

export const getRoom = controllerHelper(async (req, res, next) => {
  const { roomId } = req.params
  let rooms
  if (roomId) {
    rooms = await chatService.findRoomByUuid(roomId)
  } else {
    const { googleId } = req.decodedUser!

    const user = await userService.findByGoogleId(googleId)
    if (!user) {
      throw Error.USER_NOT_FOUND
    }
    rooms = await chatService.findAllRooms(user.id)
  }
  return rooms
})

export const addMessage = controllerHelper(async (req, res, next) => {
  const { roomUuid } = req.params
  const {
    content, createdAt, updatedAt,
  } = req.body
  const room = await chatService.findRoomByUuid(roomUuid)
  const user = await userService.findByGoogleId(req.decodedUser.googleId)
  if (!room || !user) {
    throw Error.IDK
  }
  const roomParticipants = await chatService.findRoomParticipants(room.id, user.id)
  if (!roomParticipants) {
    throw Error.IDK
  }
  const roomParticipantsId = roomParticipants.id
  if (!roomParticipants) {
    throw Error.IDK
  }

  const data = await chatService.createChat({
    roomParticipantsId, content, createdAt, updatedAt,
  })

  return data
})

