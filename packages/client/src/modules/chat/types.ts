import * as Action from 'modules/chat/action'
import {
  ReduxChatMap, ReduxState,
} from 'types'

export type ChatState = ReduxState<ReduxChatMap>

export type ChatAction =
| ReturnType<typeof Action.getChatRequest>
| ReturnType<typeof Action.getChatSuccess>
| ReturnType<typeof Action.getChatFailure>
| ReturnType<typeof Action.addChat>
| ReturnType<typeof Action.loadMoreRequest>
| ReturnType<typeof Action.loadMoreSuccess>
| ReturnType<typeof Action.loadMoreFailure>
| ReturnType<typeof Action.addChatOffset>
| ReturnType<typeof Action.resetChat>
