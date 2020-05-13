import { models } from '../models'

export const findRoomById = (roomId: string) => models.Room.findOne({
  where: { uuid: roomId },
  include: [{
    model: models.User,
    as: 'participants',
  }],
})
export const findAllRooms = (userId: string) => models.User.findOne(
  {
    where: { id: userId },
    include: [{
      model: models.Room,
      as: 'rooms',
      include: [{
        model: models.User,
        as: 'participants',
      }],
    }],
  }
)
export const getChatsByRoomId = (roomId: string) => models.Chat.findAll(
  { include: [
    {
      model: models.RoomParticipants,
      as: 'info',
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

