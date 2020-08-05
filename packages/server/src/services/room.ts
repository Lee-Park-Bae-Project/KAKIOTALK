import { models } from '../models'

interface LeaveRoom{
  roomId: number
  userId: number
}
// eslint-disable-next-line import/prefer-default-export
export const leaveRoom = async ({
  roomId, userId,
}: LeaveRoom) => models.RoomParticipants.destroy({ where: {
  userId,
  roomId,
} })

