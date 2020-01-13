import React from 'react';
import Profile from './index';

export default {
  title: 'Component/Profile',
  component: Profile,
};

export const Default = () => (
  <Profile
    name='남강우'
    statusMessage='Brand New 2020'
  />
);


export const withNoStatus = () => (
  <Profile
    name='남강우'
  />
);
