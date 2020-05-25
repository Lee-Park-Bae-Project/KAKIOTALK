import {
  CHAT_ASSOCIATION_ALIAS,
  models,
  ROOM_ASSOCIATION_ALIAS,
  ROOM_PARTICIPANTS_ASSOCIATION_ALIAS,
  USER_ASSOCIATION_ALIAS,
} from '../models'
import { IChat } from '../types'
import * as HttpError from '../common/error'
import * as userService from './userService'

export const findRoomByUuid = (uuid: string) => models.Room.findOne({
  where: { uuid },
  include: [{
    model: models.User,
    as: 'participants',
  }],
})
export const findAllRooms = async (userId: number) => {
  const data = await models.User.findOne(
    {
      where: { id: userId },
      include: [{
        attributes: ['uuid'],
        model: models.Room,
        as: USER_ASSOCIATION_ALIAS.RoomParticipants,
        include: [{
          attributes: ['uuid', 'name', 'status', 'email'],
          model: models.User,
          as: ROOM_ASSOCIATION_ALIAS.RoomParticipants,
        }],
      }],
    }
  )

  if (!data) {
    throw HttpError.IDK
  }

  const { rooms } = data

  if (!rooms) {
    throw HttpError.IDK
  }
  const preProcessed = rooms.map((room) => {
    const participants = room.participants.map((participant) => {
      const {
        uuid, name, status, email,
      } = participant
      return {
        uuid,
        name,
        status,
        email,
      }
    })
    return {
      uuid: room.uuid,
      participants,
    }
  })
  return preProcessed
}
export const getChatsByRoomId = async (roomUuid: string) => {
  const room = await models.Room.findOne({ where: { uuid: roomUuid } })
  if (!room) {
    throw HttpError.IDK
  }
  const roomId = room.id
  const chats = await models.Chat.findAll({
    raw: true,
    nest: true,
    attributes: ['uuid', 'content', 'createdAt', 'updatedAt'],
    include: [
      {
        model: models.RoomParticipants,
        as: CHAT_ASSOCIATION_ALIAS.RoomParticipants,
        attributes: ['uuid', 'createdAt', 'updatedAt', 'roomId'],
        where: { roomId },
        include: [
          {
            model: models.User,
            as: 'sender',
            attributes: ['uuid', 'name', 'email', 'status', 'createdAt', 'updatedAt'],
          },
          {
            model: models.Room,
            as: 'room',
            attributes: ['uuid', 'createdAt', 'updatedAt'],
          },
        ],
      },
    ],
  })

  return chats
}

export const getRoomParticipants = (roomId: string) => models.RoomParticipants.findAll({
  raw: true,
  nest: true,
  where: { roomId },
  include: [
    { model: models.User },
  ],
})

export const findRoomParticipants = async (roomId: number, userId: number) => (
  models.RoomParticipants.findOne({ where: {
    roomId, userId,
  } })
)

export const createChat = async ({
  roomParticipantsId,
  content,
  createdAt,
  updatedAt,
}: Omit<IChat, 'id' | 'uuid'>) => models.Chat.create({
  roomParticipantsId,
  content,
  createdAt,
  updatedAt,
})

interface AddMessage {
  userUuid: string;
  roomUuid: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export const addMessage = async ({
  userUuid,
  roomUuid,
  content,
  createdAt,
  updatedAt,
}:AddMessage) => {
  try {
    const room = await findRoomByUuid(roomUuid)
    const user = await userService.findByUuid(userUuid)
    if (!room || !user) {
      throw new Error('no room or user')
    }
    const roomParticipants = await findRoomParticipants(room.id, user.id)
    if (!roomParticipants) {
      throw new Error('no room participants')
    }

    const roomParticipantsId = roomParticipants.id
    const data = await createChat({
      roomParticipantsId,
      content,
      createdAt,
      updatedAt,
    })

    return data
  } catch (e) {
    return e
  }
}
