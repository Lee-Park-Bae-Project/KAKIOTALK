import React from 'react';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Component|Icon',
};

export const icon = () => <Icon icon='Send' size='4rem'/>;
icon.story = {
  name: 'Default',
};

export const coloredIcon = () => <Icon icon='Send' color='red'/>;

export const customSizeIcon = () => <Icon icon='Send' size='4rem'/>;
