/* eslint-disable no-undef */
import {
  ADD_CHAT_ROOM,
  REMOVE_CHAT_ROOM,
  addChatRoom,
  removeChatRoom,
} from 'modules/chatRoomList';
import rootReducer from 'modules';
import { createStore } from 'redux';
import shortid from 'shortid';
import faker from 'faker';

const store = createStore(rootReducer);

describe('Redux/chatRoomList', () => {
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

  it('Initial State', () => {
    const { chatRoomList: curState } = store.getState();
    expect(curState).toEqual(chatRoomList);
  });

  it('Add Action Creator', () => {
    AddChatRoomAction = addChatRoom(newChatRoom);
    expect(AddChatRoomAction).toEqual({
      type: ADD_CHAT_ROOM,
      payload: newChatRoom,
    });
  });

  it('Add ChatRoom', () => {
    store.dispatch(AddChatRoomAction);
    const { chatRoomList: curState } = store.getState();
    expect(curState).toEqual([newChatRoom]);
  });

  it('Remove ChatRoomList Action Creator', () => {
    RemoveChatRoomAction = removeChatRoom(newChatRoom.id);
    expect(RemoveChatRoomAction).toEqual({
      type: REMOVE_CHAT_ROOM,
      payload: newChatRoom.id,
    });
  });

  it('Remove Chat Room', () => {
    store.dispatch(RemoveChatRoomAction);
    const { chatRoomList: curState } = store.getState();
    expect(curState).toEqual([]);
  });

  it('Add Many Users', () => {
    const newUsers = [
      '123',
      '234',
      '345',
    ];
    const addUsersAction = addChatRoom(newUsers);
    const { chatRoomList: prevState } = store.getState();
    store.dispatch(addUsersAction);
    const { chatRoomList: curState } = store.getState();
    expect(curState).toEqual(prevState.concat(newUsers));
  });
});
