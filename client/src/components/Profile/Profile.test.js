/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Profile from 'components/Profile';
import TextIcon from 'components/TextIcon';

const user = {
  name: 'junow',
  statusMessage: 'this is junow',
};

describe('<Profile/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Profile {...user}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('matches props', () => {
    const wrapper = mount(<Profile {...user}/>);
    expect(wrapper.props().name).toEqual(user.name);
    expect(wrapper.props().statusMessage).toEqual(user.statusMessage);
  });

  it('click handler', () => {
    let result = '';

    const onChatClick = () => {
      result = 'chat';
    };
    const onRemoveClick = () => {
      result = 'remove';
    };
    const wrapper = mount(
    <Profile
      {...user}
      onChatClick={onChatClick}
      onRemoveClick={onRemoveClick}
    />
    );
    const chatButton = wrapper.find(TextIcon).at(0);
    const removeButton = wrapper.find(TextIcon).at(1);

    expect(result).toBe('');
    chatButton.simulate('click');
    expect(result).toBe('chat');
    removeButton.simulate('click');
    expect(result).toBe('remove');
  });
});
