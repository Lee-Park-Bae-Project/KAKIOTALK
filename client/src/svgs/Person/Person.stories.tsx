import React from 'react';
import Person from './index';

export default {
  title: 'Svg/Person',
  component: Person,
};

export const PersonBasic = () => <Person />;

export const PersonSmall = () => <Person size='small'/>;

export const PersonMedium = () => <Person size='medium'/>;

export const PersonLarge = () => <Person size='large'/>;

export const PersonSelectedSmall = () => <Person selected size='small'/>;

export const PersonSelectedMedium = () => <Person selected size='medium' />;

export const PersonSelectedLarge = () => <Person selected size='large'/>;
