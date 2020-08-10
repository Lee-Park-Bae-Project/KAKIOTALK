import * as Action from 'modules/profile/action'

import { Models } from '@kakio/common'

export type UserState = Pick<Models.User, 'uuid' | 'email' | 'statusMessage' | 'name' | 'imageUrl'>

export type ProfileAction =
  | ReturnType<typeof Action.getProfile>
  | ReturnType<typeof Action.getProfileSuccess>
  | ReturnType<typeof Action.updateProfielSuccess>
  | ReturnType<typeof Action.updateProfileRequest>
  | ReturnType<typeof Action.resetProfile>
