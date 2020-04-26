import { sendingChat, recevingChat } from 'modules/chat/action';

export type chatSocketAction =
  | ReturnType<typeof sendingChat>
  | ReturnType<typeof recevingChat>;
