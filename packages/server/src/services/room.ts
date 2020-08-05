import { models } from '../models'

interface LeaveRoom{
  roomId: string
  userId: string
}
// eslint-disable-next-line import/prefer-default-export
export const leaveRoom = async ({
  roomId, userId,
}) => models.RoomParticipants.destroy({ where: {
  userId,
  roomId,
} })

