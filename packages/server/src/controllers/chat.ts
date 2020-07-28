
// import { response } from 'express'
import * as chatService from '../services/chat'
import * as userService from '../services/user'
import {
  controllerHelper, response, uuid,
} from '../common/utils'
import * as httpError from '../common/error'

export const getChats = controllerHelper(async (req, res, next) => {
  const { roomId: roomUuid } = req.params
  const limit = Number(req.query.limit)
  const offset = Number(req.query.offset)

  if (limit === undefined || offset === undefined) {
    throw httpError.BAD_REQUEST
  }
  const room = await chatService.findRoomByUuid(roomUuid)
  if (!room) {
    throw httpError.ROOM_NOT_FOUND
  }

  const chats = await chatService.getChatsByRoomId({
    roomId: room.id,
    limit,
    offset,
  })
  if (!chats) {
    throw httpError.DATA_NOT_FOUND
  }

  return {
    chats,
    offset,
    limit,
  }
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
      throw httpError.USER_NOT_FOUND
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
    throw httpError.IDK
  }
  const roomParticipants = await chatService.findRoomParticipants(room.id, user.id)
  if (!roomParticipants) {
    throw httpError.IDK
  }
  const roomParticipantsId = roomParticipants.id
  if (!roomParticipants) {
    throw httpError.IDK
  }

  const data = await chatService.createChat({
    roomParticipantsId, content, createdAt, updatedAt,
  })

  return data
})
export const makeRoom = controllerHelper(async (req, res, next) => {
  const inviteUser = req.body.args
  let rooms
  if (inviteUser.length === 2) {
    const privateRoom = await chatService.makePrivateRoom(inviteUser)
    if (!privateRoom) {
      const room = await chatService.createRoom()
      const roomId = room.id
      if (!roomId) {
        throw httpError.IDK
      }
      const groupRoom = await chatService.makeGroupRoom(inviteUser, roomId)
    }
  } else {
    const room = await chatService.createRoom()
    const roomId = room.id
    if (!roomId) {
      throw httpError.IDK
    }
    const groupRoom = await chatService.makeGroupRoom(inviteUser, roomId)
  }
  const user = await userService.findByUuid(inviteUser[inviteUser.length - 1].uuid)
  if (!user) {
    throw httpError.USER_NOT_FOUND
  }
  const userId = user.id
  rooms = await chatService.findAllRooms(userId)
  return rooms
})

export const getFirstChat = controllerHelper(async (req, res, next) => {
  const { roomUuid } = req.params
  const room = await chatService.findRoomByUuid(roomUuid)
  if (!room) {
    throw httpError.ROOM_NOT_FOUND
  }

  const roomId = room.id
  const firstChat = await chatService.findFirstChat(roomId)
  if (!firstChat) {
    throw httpError.DATA_NOT_FOUND
  }

  return firstChat
})

export const getLastChat = controllerHelper(async (req, res, next) => {
  const { roomUuid } = req.params

  const room = await chatService.findRoomByUuid(roomUuid)
  if (!room) {
    throw httpError.ROOM_NOT_FOUND
  }

  const roomId = room.id
  const lastChat = await chatService.findLastChat(roomId)
  if (!lastChat) {
    throw httpError.DATA_NOT_FOUND
  }

  return lastChat
})
