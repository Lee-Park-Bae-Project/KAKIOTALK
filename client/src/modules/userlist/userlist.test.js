/* eslint-disable no-undef */
import {
  ADD_USER,
  REMOVE_USER,
  addUser,
  removeUser,
} from 'modules/userlist';
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
    AddUserAction = addUser(newUser);
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
    RemoveUserAction = removeUser('123');
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
});
