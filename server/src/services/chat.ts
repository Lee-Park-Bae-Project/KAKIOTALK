import { models } from '../models'

export const findRoomById = (roomId: string) => models.Room.findOne({ where: { roomId } })
export const getChatsByRoomId = (roomId: string) => models.Chat.findAll({
  where: { roomId },
  include: [
    {
      model: models.RoomParticipants,
      as: 'sender',
      include: [
        models.User,
      ],
    },
    {
      model: models.Room,
      as: 'room',
    },
  ],
})
