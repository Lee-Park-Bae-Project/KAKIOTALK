import * as Action from 'modules/alert/action'

export type AlertType =
| ReturnType<typeof Action.loginFailure>
| ReturnType<typeof Action.addFriend>
| ReturnType<typeof Action.deleteFriend>
| ReturnType<typeof Action.error>
| ReturnType<typeof Action.confirmDelete>
