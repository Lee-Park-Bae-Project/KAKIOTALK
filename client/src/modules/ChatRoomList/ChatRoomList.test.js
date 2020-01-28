/* eslint-disable no-undef */
import {
  ADD_CHAT_ROOM,
  REMOVE_CHAT_ROOM,
  addChatRoom,
  removeChatRoom,
  ChatRoom,
} from 'modules/ChatRoomList';
import rootReducer from 'modules';
import { createStore } from 'redux';
import shortid from 'shortid';
import faker from 'faker';

const store = createStore(rootReducer);

describe('Redux/chatRoomList', () => {
  console.log(store.getState());
  const chatRoomList = [];
  let AddChatRoomAction;
  let RemoveChatRoomAction;
  const newChatRoom = {
    id: shortid.generate(),
    lastMessage: faker.lorem.sentence(),
    lastModified: Date.now(),
    numOfNewMessages: Math.round(Math.random(100)),
    userList: [
      faker.name.firstName(),
      faker.name.firstName(),
      faker.name.firstName(),
    ],
  };

  // it('Initial State', () => {
  //   const { chatRoomList: curState } = store.getState();
  //   console.log(store.getState());
  //   expect(curState).toEqual(chatRoomList);
  // });

  it('Add Action Creator', () => {
    AddChatRoomAction = addChatRoom(newChatRoom);
    expect(AddChatRoomAction).toEqual({
      type: ADD_CHAT_ROOM,
      payload: newChatRoom,
    });
  });
});
