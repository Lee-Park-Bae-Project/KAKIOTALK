
// import { response } from 'express'
import { ApiTypes } from '@kakio/common'
import * as chatService from '../services/chat'
import * as userService from '../services/user'
import { controllerWrapper } from '../common/utils'
import * as httpError from '../common/error'

export const getChats = controllerWrapper(async (req, res, next) => {
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

export const getRoom = controllerWrapper(async (req, res, next) => {
  const { roomId } = req.params
  if (roomId) {
    return chatService.findRoomByUuid(roomId)
  }
  const { googleId } = req.decodedUser!

  const user = await userService.findByGoogleId(googleId)
  if (!user) {
    throw httpError.USER_NOT_FOUND
  }
  const ret: ApiTypes.Room[] = await chatService.findAllRooms(user.id)

  return ret
})

export const addMessage = controllerWrapper(async (req, res, next) => {
  const { roomUuid } = req.params
  const {
    content, createdAt, updatedAt,
  } = req.body
  const room = await chatService.findRoomByUuid(roomUuid)
  const user = await userService.findByGoogleId(req.decodedUser.googleId)
  if (!room) {
    throw httpError.ROOM_NOT_FOUND
  }
  if (!user) {
    throw httpError.USER_NOT_FOUND
  }
  const roomParticipants = await chatService.findRoomParticipants(room.id, user.id)
  if (!roomParticipants) {
    throw httpError.DATA_NOT_FOUND
  }
  const roomParticipantsId = roomParticipants.id
  if (!roomParticipants) {
    throw httpError.DATA_NOT_FOUND
  }

  const data = await chatService.createChat({
    roomParticipantsId, content, createdAt, updatedAt, roomId: room.id,
  })

  return data
})
export const makeRoom = controllerWrapper(async (req, res, next) => {
  const inviteUser = req.body.args
  let roomUuid
  if (inviteUser.length === 2) {
    const privateRoom = await chatService.makePrivateRoom(inviteUser)
    if (!privateRoom) {
      const room = await chatService.createRoom()
      if (!room) {
        throw httpError.IDK
      }
      const roomId = room.id
      roomUuid = room.uuid
      const groupRoom = await chatService.makeGroupRoom(inviteUser, roomId)
    } else {
      roomUuid = privateRoom.uuid
    }
  } else {
    const room = await chatService.createRoom()
    if (!room) {
      throw httpError.ROOM_NOT_MADE
    }
    const roomId = room.id
    roomUuid = room.uuid
    await chatService.makeGroupRoom(inviteUser, roomId)
  }
  const user = await userService.findByUuid(inviteUser[inviteUser.length - 1].uuid)
  /* inviteUser의 마지막 index에는 항상 본인이 들어가기 때문에 inviteUser.length-1로 설정 */

  if (!user) {
    throw httpError.USER_NOT_FOUND
  }
  const userId = user.id
  const rooms = await chatService.findAllRooms(userId)
  return {
    rooms, roomUuid,
  }
})

export const getFirstChat = controllerWrapper(async (req, res, next) => {
  const { roomUuid } = req.params
  const room = await chatService.findRoomByUuid(roomUuid)
  if (!room) {
    throw httpError.ROOM_NOT_FOUND
  }

  const roomId = room.id
  const firstChat = await chatService.findFirstChat(roomId)

  return firstChat
})

export const getLastChat = controllerWrapper(async (req, res, next) => {
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
