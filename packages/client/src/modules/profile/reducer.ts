import * as Action from 'modules/profile/action'
import { ProfileAction } from 'modules/profile/types'
import { Models } from '@kakio/common'

type UserState = Pick<Models.User, 'uuid' | 'email' | 'statusMessage' | 'name' | 'imageUrl'>

const initialState: UserState = {
  uuid: '',
  email: '',
  statusMessage: '',
  name: '',
  imageUrl: '',
}

const profile = (state: UserState = initialState, action: ProfileAction) => {
  switch (action.type) {
    case Action.GET_PROFILE_SUCCESS: {
      return action.payload
    }

    case Action.UPDATE_PROFILE_SUCCESS: {
      return action.payload
    }
    case Action.RESET_PROFILE: {
      return initialState
    }
    default:
      return state
  }
}

export default profile
