/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';
import Button from '../Button';
import ButtonGroup from './index';

describe('<ButtonnGroup />', () => {
  it('버튼 2개 렌더링 되는지 확인', () => {
    const wrapper = mount((
      <ButtonGroup>
        <Button text='confirm'/>
        <Button text='cancel'/>
      </ButtonGroup>
    ));

    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('버튼 텍스트 확인', () => {
    const wrapper = mount((
      <ButtonGroup>
        <Button text='confirm' id='confirm-button'/>
        <Button text='cancel' id='cancel-button'/>
      </ButtonGroup>
    ));

    const confirmButton = wrapper.find('#confirm-button');
    const cancelButton = wrapper.find('#cancel-button');

    expect(confirmButton.text()).toEqual('confirm');
    expect(cancelButton.text()).toEqual('cancel');
  });
});
