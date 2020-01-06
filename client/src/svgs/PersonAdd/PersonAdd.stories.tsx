import React from 'react';
import PersonAdd from './index';

export default {
  title: 'Svg/PersonAdd',
  component: PersonAdd,
};

export const PersonAddBasic = () => <PersonAdd />;

export const PersonAddSmall = () => <PersonAdd size='small'/>;

export const PersonAddMedium = () => <PersonAdd size='medium'/>;

export const PersonAddLarge = () => <PersonAdd size='large'/>;

export const PersonAddSelectedSmall = () => <PersonAdd selected size='small'/>;

export const PersonAddSelectedMedium = () => <PersonAdd selected size='medium' />;

export const PersonAddSelectedLarge = () => <PersonAdd selected size='large'/>;
