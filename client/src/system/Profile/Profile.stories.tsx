import React from 'react';
import Profile from 'system/Profile';

export default {
  title: 'Systems/Profile',
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
