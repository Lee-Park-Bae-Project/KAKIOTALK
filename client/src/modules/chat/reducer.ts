import { SENDING_CHAT, RECEIVING_CHAT } from 'modules/chat/action';
import { chatSocketAction } from 'modules/chat/types';
import { Chat } from 'types';

const initialState: Chat[] = [];

function chatReducer(state: Chat[] = initialState, action: chatSocketAction) {
  switch (action.type) {
    case RECEIVING_CHAT:
      {
        return action.payload;
      }
      defulat: return state;
  }
}
export default chatReducer;
