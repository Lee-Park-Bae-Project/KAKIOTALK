import {
  getChatRequest,
  getChatSuccess,
  getChatFailure,
  addChat,
} from 'modules/chat/action';
import { ReduxState, ReduxChatType } from 'types';

export type ChatState = ReduxState<ReduxChatType>

export type ChatAction =
| ReturnType<typeof getChatRequest>
| ReturnType<typeof getChatSuccess>
| ReturnType<typeof getChatFailure>
| ReturnType<typeof addChat>
