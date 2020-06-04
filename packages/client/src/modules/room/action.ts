import { AxiosError } from 'axios'
import { Room } from '@kakio/common'

export const GET_ROOM_REQUEST = 'room/GET_ROOM_REQUEST' as const
export const GET_ROOM_SUCCESS = 'room/GET_ROOM_SUCCESS' as const
export const GET_ROOM_FAILURE = 'room/GET_ROOM_FAILURE' as const

export const getRoomRequest = () => ({
  type: GET_ROOM_REQUEST,
  payload: {},
})

export const getRoomSuccess = (room: Room[]) => ({
  type: GET_ROOM_SUCCESS,
  payload: room,
})

export const getRoomFailure = (e: AxiosError) => ({
  type: GET_ROOM_FAILURE,
  message: e.message,
  payload: {},
})
