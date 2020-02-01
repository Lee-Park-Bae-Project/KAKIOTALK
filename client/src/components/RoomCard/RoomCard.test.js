/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import RoomCard from 'components/RoomCard';
import faker from 'faker';

// faker.locale = 'ko';
describe('<RoomCard/>', () => {
  const userList = ['a',
    's',
    'd',
    'c'];
  const lastMessage = 'hihi';
  const lastModified = '123';

  it('matches snapshots', () => {
    const wrapper = mount(
      <RoomCard
        userList={userList}
        lastMessage={lastMessage}
        lastModified={lastModified}
        numOfNewMessage={3}
    />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
