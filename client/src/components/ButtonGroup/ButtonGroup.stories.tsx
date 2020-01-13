import React from 'react';
import ButtonGroup from './index';
import Button from '../Button';

export default {
  title: 'Component/ButtonGroup',
  component: ButtonGroup,
};


export const DefaultButtonGroup = () => (
    <ButtonGroup>
      <Button text='hi1'/>
      <Button text='hi2'/>
    </ButtonGroup>
);

export const RightButtonGroup = () => (
  <ButtonGroup right>
    <Button text='hi1'/>
    <Button text='hi2'/>
  </ButtonGroup>
);

export const ColumnButtonGroup = () => (
  <ButtonGroup direction='col'>
    <Button text='hi1'/>
    <Button text='hi2'/>
  </ButtonGroup>
);
