import React from 'react';
import TextIcon from './index';

export default {
  title: 'Component/TextIcon',
  component: TextIcon,
};

export const Default = () => (
    <TextIcon icon='Close' size='2rem' iconPosition='left' text='close' color='white'/>
);

export const Right = () => (
  <TextIcon icon='Close' size='2rem' iconPosition='right' text='close'/>
);

export const Top = () => (
  <TextIcon icon='Close' size='2rem' iconPosition='top' text='close'/>
);

export const Bottom = () => (
  <TextIcon icon='Close' size='2rem' iconPosition='bottom' text='close'/>
);

export const CustomColor = () => (
  <TextIcon icon='Close' size='2rem' iconPosition='bottom' text='close' color='red' textColor='blue'/>
);
