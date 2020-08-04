import { AxiosError } from 'axios'
import { Models } from '@kakio/common'
import { InviteUser } from 'types'

export const GET_ROOM_REQUEST = 'room/GET_ROOM_REQUEST' as const
export const GET_ROOM_SUCCESS = 'room/GET_ROOM_SUCCESS' as const
export const GET_ROOM_FAILURE = 'room/GET_ROOM_FAILURE' as const
export const MAKE_ROOM_REQUEST = 'room/MAKE_ROOM_REQUEST' as const
export const RESET_ROOM = 'room/RESET_ROOM' as const
export const MAKE_ROOM_SUCCESS = 'room/MAKE_ROOM_SUCCESS' as const
export const MAKE_ROOM_FAILURE = 'room/MAKE_ROOM_FAILURE' as const
export const getRoomRequest = () => ({
  type: GET_ROOM_REQUEST,
  payload: {},
})

export const getRoomSuccess = (room: Models.Room[]) => ({
  type: GET_ROOM_SUCCESS,
  payload: room,
})

export const getRoomFailure = (e: AxiosError) => ({
  type: GET_ROOM_FAILURE,
  message: e.message,
  payload: {},
})
export const makeRoomRequest = (inviteUsers: InviteUser[]) => ({
  type: MAKE_ROOM_REQUEST,
  payload: inviteUsers,
})

export const resetRoom = () => ({ type: RESET_ROOM })
interface MakeRoomSuccess {
  room: Models.Room[]
  roomUuid: string
}

export const makeRoomSuccess = ({
  room, roomUuid,
}: MakeRoomSuccess) => ({
  type: MAKE_ROOM_SUCCESS,
  payload: {
    room, roomUuid,
  },
})

export const makeRoomFailure = (e: AxiosError) => ({
  type: MAKE_ROOM_FAILURE,
  message: e.message,
  payload: {},
})

