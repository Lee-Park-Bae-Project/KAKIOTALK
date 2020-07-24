export const AFTER_LOGIN = 'SOCKET/AFTER_LOGIN' as const
export const JOIN_ROOM = 'SOCKET/JOIN_ROOM' as const

interface AfterLogin {
  uuid: string
}
export const afterLogin = ({ uuid }: AfterLogin) => ({
  type: AFTER_LOGIN,
  payload: { uuid },
})
interface JoinRooms {
  roomUuids: string[]
}
export const joinRooms = ({ roomUuids }: JoinRooms) => ({
  type: JOIN_ROOM,
  payload: { roomUuids },
})
