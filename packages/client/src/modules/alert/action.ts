export const LOGIN_FAILURE = 'alert/LOGIN_FAILURE' as const
export const ADD_FRIEND = 'alert/ADD_FRIENND' as const
export const DELETE_FRIEND = 'alert/DELETE_FRIEND' as const
export const Error = 'alert/Error' as const

export const loginFailure = (msg: string) => ({
  type: LOGIN_FAILURE,
  payload: { msg },
})

export const addFriend = (msg: string) => ({
  type: ADD_FRIEND,
  payload: { msg },
})

export const deleteFriend = () => ({ type: DELETE_FRIEND })

export const error = (msg: string) => ({
  type: Error,
  payload: { msg },
})
