
import { QueryTypes } from 'sequelize/types'
import * as chatService from '../services/chat'
import * as userService from '../services/user'
import {
  controllerHelper, uuid,
} from '../common/utils'
import * as httpError from '../common/error'

export const getChats = controllerHelper(async (req, res, next) => {
  const { roomId } = req.params
  const chats = await chatService.getChatsByRoomId(roomId)
  if (!chats) {
    throw httpError.ROOM_NOT_FOUND
  }

  return chats
})

export const getRoom = controllerHelper(async (req, res, next) => {
  const { roomId } = req.params
  console.log(roomId)
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
  try {
    const inviteUser = req.query.args as QueryTypes[]
    console.log(JSON.parse(inviteUser[0]).uuid)

    const roomId = await chatService.createRoom()
    if (!roomId) {
      throw httpError.IDK
    }
    const addRoomParticipants = inviteUser.forEach(async (userList:QueryTypes) => {
      const userUuid = await JSON.parse(userList).uuid
      const userName = await JSON.parse(userList).name

      const userRoom = await chatService.makeRoomParticipants({
        userUuid, userName,
      }, roomId.id)
      console.log('error in here?')
      if (!userRoom) {
        throw httpError.IDK
      }
    })
    console.log('helel')
    return roomId
  } catch (e) {
    next(e)
  }
})
