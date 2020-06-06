import {
  GET_PROFILE_SUCCESS,
  INIT_PROFILE,
  UPDATE_PROFILE_SUCCESS,
} from 'modules/profile/action'
import { ProfileAction } from 'modules/profile/types'
import { User } from '@kakio/common'

type UserState = Pick<User, 'uuid' | 'email' | 'statusMessage' | 'name' | 'imageUrl'>

const initialState: UserState = {
  uuid: '',
  email: '',
  statusMessage: '',
  name: '',
  imageUrl: '',
}

const profile = (state: UserState = initialState, action: ProfileAction) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS: {
      return action.payload
    }
    case INIT_PROFILE:
      return action.payload

    case UPDATE_PROFILE_SUCCESS: {
      return action.payload
    }

    default:
      return state
  }
}

export default profile
