import {
  addChat,
  getChatFailure,
  getChatRequest,
  getChatSuccess,
} from 'modules/chat/action'
import {
  ReduxChatMap, ReduxState,
} from 'types'

export type ChatState = ReduxState<ReduxChatMap>

export type ChatAction =
| ReturnType<typeof getChatRequest>
| ReturnType<typeof getChatSuccess>
| ReturnType<typeof getChatFailure>
| ReturnType<typeof addChat>
