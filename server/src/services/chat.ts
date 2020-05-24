import {
  CHAT_ASSOCIATION_ALIAS, models, ROOM_ASSOCIATION_ALIAS, USER_ASSOCIATION_ALIAS,
} from '../models'

export const findRoomById = (roomId: string) => models.Room.findOne({
  where: { uuid: roomId },
  include: [{
    model: models.User,
    as: 'participants',
  }],
})
export const findAllRooms = async (userId: string) => {
  const data = await models.User.findOne(
    {
      where: { id: userId },
      include: [{
        attributes: ['uuid'],
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
    throw new Error()
  }

  const { rooms } = data

  if (!rooms) {
    throw new Error()
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
      participants,
    }
  })
  return preProcessed
}
export const getChatsByRoomId = (roomId: string) => models.Chat.findAll(
  { include: [
    {
      model: models.RoomParticipants,
      as: CHAT_ASSOCIATION_ALIAS.RoomParticipants,
      where: { roomId },
      include: [
        models.User,
        models.Room,
      ],
    },
  ] }
)

export const getRoomParticipants = (roomId: string) => models.RoomParticipants.findAll({
  raw: true,
  nest: true,
  where: { roomId },
  include: [
    { model: models.User },
  ],
})

