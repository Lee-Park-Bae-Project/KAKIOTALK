import * as Action from 'modules/profile/action'

export type ProfileAction =
  | ReturnType<typeof Action.getProfile>
  | ReturnType<typeof Action.getProfileSuccess>
  | ReturnType<typeof Action.updateProfielSuccess>
  | ReturnType<typeof Action.updateProfileRequest>
  | ReturnType<typeof Action.resetProfile>
