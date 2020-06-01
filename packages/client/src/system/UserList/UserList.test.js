/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import UserList from 'system/UserList';
import UserCard from 'components/UserCard';

import {
  addFriends,
} from 'modules/friends';
import rootReducer from 'modules';
import { createStore } from 'redux';

const store = createStore(rootReducer);
const myProfile = {
  id: '123',
  userName: 'junow',
  statusMessage: 'im junow',
};
const userList = [
  {
    id: '234',
    userName: 'park',
    statusMessage: 'parkpark',
  },
  {
    id: '345',
    userName: 'bae',
    statusMessage: 'baebae',
  },
];

describe('<UserList/>', () => {
  it('match snapshot', () => {
    const onClick = (id) => () => { console.log(id); };
    const wrapper = mount(
    <UserList
      myProfile={myProfile}
      userList={userList}
      onClick={onClick}
    />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('matches props', () => {
    const onClick = (id) => () => { console.log(id); };
    const wrapper = mount(
      <UserList
        myProfile={myProfile}
        userList={userList}
        onClick={onClick}
      />
    );

    expect(wrapper.props().myProfile).toEqual(myProfile);
    expect(wrapper.props().userList).toEqual(userList);
  });

  it('click handler', () => {
    let result = '';
    const onClick = (id) => () => {
      result = id;
    };

    const wrapper = mount(
      <UserList
        myProfile={myProfile}
        userList={userList}
        onClick={onClick}
      />
    );

    const firstUser = wrapper.find(UserCard).at(1);
    const secondUser = wrapper.find(UserCard).at(2);
    expect(result).toBe('');
    firstUser.simulate('click');
    expect(result).toBe(userList[0].id);
    secondUser.simulate('click');
    expect(result).toBe(userList[1].id);
  });
});
