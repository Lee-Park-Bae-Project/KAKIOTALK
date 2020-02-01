/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import List from 'system/List';
import Profile from 'system/Profile';
import faker from 'faker';

describe('<List/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount((
      <List>
        <Profile
          id='asd'
          statusMessage='asd'
          userName='asd'
        />
        <Profile
          id='asd'
          statusMessage='asd'
          userName='asd'
        />
        <Profile
          id='asd'
          statusMessage='asd'
          userName='asd'
        />
      </List>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
