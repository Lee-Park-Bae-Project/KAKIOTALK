/* eslint-disable no-undef */
import {
  ADD_USER,
  REMOVE_USER,
  addFriends,
  removeFriend,
} from 'modules/friends';
import rootReducer from 'modules';
import { createStore } from 'redux';

const store = createStore(rootReducer);

describe('Redux/userlist', () => {
  const userList = [];
  let AddUserAction;
  let RemoveUserAction;
  const newUser = {
    id: '123',
    userName: 'junow',
    statusMessage: 'hihi',
  };

  it('Initial State', () => {
    const { userList: curState } = store.getState();
    expect(curState).toEqual(userList);
  });

  it('Add Action Creator', () => {
    AddUserAction = addFriends(newUser);
    expect(AddUserAction).toEqual({
      type: ADD_USER,
      payload: newUser,
    });
  });

  it('Add User', () => {
    store.dispatch(AddUserAction);
    const { userList: curState } = store.getState();
    expect(curState).toEqual([newUser]);
  });

  it('Remove User', () => {
    RemoveUserAction = removeFriend('123');
    expect(RemoveUserAction).toEqual({
      type: REMOVE_USER,
      payload: '123',
    });
  });

  it('Remove User', () => {
    store.dispatch(RemoveUserAction);
    const { userList: curState } = store.getState();
    expect(curState).toEqual([]);
  });

  it('Add Users', () => {
    const users = [
      {
        id: '1',
        userName: '1',
        statusMessage: '1',
      },
      {
        id: '2',
        userName: '2',
        statusMessage: '2',
      },
    ];

    const AddUsersAction = addFriends(users);
    const { userList: prevState } = store.getState();
    store.dispatch(AddUsersAction);
    const { userList: curState } = store.getState();
    expect(curState).toEqual(prevState.concat(users));
  });
});
