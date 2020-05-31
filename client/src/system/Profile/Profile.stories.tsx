import React from 'react';
import Profile from 'system/Profile';

export default {
  title: 'Systems/Profile',
  component: Profile,
};

export const Default = () => (
  <Profile
    uuid= '1'
    name='남강우'
    statusMessage='Brand New 2020'
    onDeleteClick= {()=>{}}
  />
);


export const withNoStatus = () => (
  <Profile
    uuid='2'
    name='남강우'
    statusMessage=''
    onDeleteClick= {()=>{}}

  />
);
