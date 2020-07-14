import { Models } from '@kakio/common'
import { chatFromServer } from '../socket'
import {
  CHAT_ASSOCIATION_ALIAS,
  models,
  ROOM_ASSOCIATION_ALIAS,
  ROOM_PARTICIPANTS_ASSOCIATION_ALIAS,
  USER_ASSOCIATION_ALIAS,
} from '../models'
import * as HttpError from '../common/error'
import * as userService from './user'

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
        attributes: ['uuid', 'createdAt', 'updatedAt'],
        model: models.Room,
        as: USER_ASSOCIATION_ALIAS.RoomParticipants,
        include: [{
          attributes: ['uuid', 'name', 'statusMessage', 'email'],
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
        uuid, name, statusMessage, email,
      } = participant
      return {
        uuid,
        name,
        statusMessage,
        email,
      }
    })
    return {
      uuid: room.uuid,
      createdAt: room.createdAt,
      updatedAt: room.updatedAt,
      participants,
    }
  })
  return preProcessed
}

interface GetChatsByRoomId {
  roomId: number
  limit: number
  offset: number
}
export const getChatsByRoomId = async ({
  roomId, limit, offset,
}:GetChatsByRoomId) => {
  const chats = await models.Chat.findAll({
    raw: true,
    nest: true,
    attributes: ['uuid', 'content', 'createdAt', 'updatedAt'],
    order: [['createdAt', 'DESC']],
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
            attributes: ['uuid', 'name', 'email', 'statusMessage', 'imageUrl', 'createdAt', 'updatedAt'],
          },
          {
            model: models.Room,
            as: 'room',
            attributes: ['uuid', 'createdAt', 'updatedAt'],
          },
        ],
      },
    ],
    limit,
    offset,
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

const findChatById = async (id: number) => models.Chat.findOne({
  raw: true,
  nest: true,
  where: { id },
  attributes: ['uuid', 'content', 'createdAt', 'updatedAt'],
  include: [
    {
      model: models.RoomParticipants,
      as: CHAT_ASSOCIATION_ALIAS.RoomParticipants,
      attributes: ['uuid', 'createdAt', 'updatedAt', 'roomId'],
      include: [
        {
          model: models.User,
          as: 'sender',
          attributes: ['uuid', 'name', 'email', 'statusMessage', 'createdAt', 'updatedAt'],
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

export const createChat = async ({
  roomParticipantsId,
  content,
  createdAt,
  updatedAt,
}: Omit<Models.Chat, 'id' | 'uuid' | 'sender'>) => models.Chat.create({
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
    const newChatData = await createChat({
      roomParticipantsId,
      content,
      createdAt,
      updatedAt,
    })

    const chatId = newChatData.id
    const newChat = await findChatById(chatId)
    return newChat
  } catch (e) {
    console.error(e)
    return e
  }
}
interface userList{
  userUuid: string;
  userName: string;
}

export const createRoom = async () => models.Room.create()
export const makeRoomParticipants = async ({
  userUuid, userName,
}:userList, roomId) => {
  const user = await userService.findByUuid(userUuid)
  if (!user) {
    throw HttpError.USER_NOT_FOUND
  }
  const userId = user.id
  const roomParticipant = await models.RoomParticipants.create({
    roomId, userId,
  })
  if (!roomParticipant) {
    throw HttpError.ROOM_NOT_FOUND
  }
  return roomParticipant
}

export const findFirstChat = async (roomId: number) => models.Chat.findOne({
  raw: true,
  nest: true,
  order: [['updatedAt', 'ASC']],
  include: [
    {
      model: models.RoomParticipants,
      as: CHAT_ASSOCIATION_ALIAS.RoomParticipants,
      where: { roomId },
    },
  ],
})

export const findLastChat = async (roomId: number) => models.Chat.findOne({
  raw: true,
  nest: true,
  order: [['updatedAt', 'ASC']],
  include: [
    {
      model: models.RoomParticipants,
      as: CHAT_ASSOCIATION_ALIAS.RoomParticipants,
      where: { roomId },
    },
  ],
})
