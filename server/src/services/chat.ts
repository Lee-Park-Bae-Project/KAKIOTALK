import { models } from '../models'

export const findRoomById = (roomId: string) => models.Room.findOne({ where: { roomId } })
export const findAllRooms = (userId: string) => models.RoomParticipants.findAll(
  {
    raw: true,
    nest: true,
    where: { userId },
    include: [
      {
        model: models.Room,
        as: 'roomInfo',
      },
    ],
  }
)
export const getChatsByRoomId = (roomId: string) => models.Chat.findAll({ include: [
  {
    model: models.RoomParticipants,
    where: { roomId },
    as: 'chatInfo',
    include: [
      {
        model: models.User,
        as: 'sender',
      },
      {
        model: models.Room,
        as: 'roomInfo',
      },
    ],
  },
] })

export const getRoomParticipants = (roomId: string) => models.RoomParticipants.findAll({
  where: { roomId },
  include: [
    {
      model: models.User,
      as: 'participants',
    },
  ],
})
