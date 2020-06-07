import {
  addChat,
  getChatFailure,
  getChatRequest,
  getChatSuccess,
} from 'modules/chat/action'
import {
  ReduxChatType, ReduxState,
} from 'types'

export type ChatState = ReduxState<ReduxChatType>

export type ChatAction =
| ReturnType<typeof getChatRequest>
| ReturnType<typeof getChatSuccess>
| ReturnType<typeof getChatFailure>
| ReturnType<typeof addChat>
