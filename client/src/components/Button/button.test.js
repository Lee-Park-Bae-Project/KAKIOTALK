/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
  // it('matches snapshot', () => {
  //   const wrapper = mount(<Button test="button"/>);
  //   expect(wrapper).toMatchSnapshot();
  // });

  it('버튼 text 확인', () => {
    const wrapper = mount(<Button text='text'/>);
    expect(wrapper.props().text).toBe('text');
    const button = wrapper.find('button');
    expect(button.text()).toBe('text');
  });

  it('버튼 배경색 확인', () => {
    const wrapper = mount(<Button text='text'/>);
    const button = wrapper.find(Button);
    expect(getComputedStyle(button.getDOMNode()).getPropertyValue('background-color')).toBe('rgb(247, 207, 70)');
  });
});
