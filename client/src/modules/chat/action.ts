import { AxiosError } from 'axios';

export const SENDING_CHAT = 'chat/SENDING_CHAT' as const;
export const RECEIVING_CHAT = 'chat/RECEVING_CHAT';

export const sendingChat = () => ({
  type: SENDING_CHAT
});
export const recevingChat = (data: any) => ({
  type: RECEIVING_CHAT,
  payload: data
});
