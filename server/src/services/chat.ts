import { models } from '../models'

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
        as: 'rooms',
        include: [{
          attributes: ['uuid', 'name', 'status', 'email'],
          model: models.User,
          as: 'participants',
        }],
      }],
    }
  )
  const { rooms } = data
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

