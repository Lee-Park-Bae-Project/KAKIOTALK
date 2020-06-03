/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import RoomCard from 'components/RoomCard';

// faker.locale = 'ko';
describe('<RoomCard/>', () => {
  const userList = ['a',
    's',
    'd',
    'c'];
  const lastMessage = 'hihi';
  const lastModified = '2020-04-25 22:13:52';

  it('matches snapshots', () => {
    const wrapper = mount(
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessages={3}
    />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
