import { Socket } from '@kakio/common'
import { models } from '../models'
import * as chatService from '../services/chat'
import * as userService from '../services/user'
import * as httpError from '../common/error'

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

export const leaveRoomFromClient = async ({
  roomUuid, userUuid,
}: Socket.LeaveRoom) => {
  const user = await userService.findByUuid(userUuid)
  const room = await chatService.findRoomByUuid(roomUuid)
  if (!user || !user.id) throw httpError.USER_NOT_FOUND
  if (!room || !room.id) throw httpError.ROOM_NOT_FOUND
  const deletedNum = await models.RoomParticipants.destroy({ where: {
    userId: user.id,
    roomId: room.id,
  } })

  if (!deletedNum) throw httpError.CAN_NOT_BE_DONE
}
