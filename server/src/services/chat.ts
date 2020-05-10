import { models } from '../models'

export const findRoomById = (roomId: string) => models.Room.findOne({ where: { roomId } })
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

