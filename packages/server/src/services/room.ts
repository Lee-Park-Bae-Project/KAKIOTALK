import { Socket } from '@kakio/common'
import { models } from '../models'
import * as chatService from '../services/chat'
import * as userService from '../services/user'
import * as httpError from '../common/error'

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

export const getRoomParticipantsNum = async ({ roomUuid }: { roomUuid: string }) => {
  const room = await chatService.findRoomByUuid(roomUuid)
  if (!room || !room.id) throw httpError.ROOM_NOT_FOUND
  const participants = await models.RoomParticipants.findAll({ where: { roomId: room.id } })
  return participants.length
}

export const deleteRoom = async ({ roomUuid }: {roomUuid:string}) => {
  const deletedNum = await models.Room.destroy({ where: { uuid: roomUuid } })
  if (!deletedNum) throw httpError.CAN_NOT_BE_DONE
}
