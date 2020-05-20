import React from 'react';
import Profile from 'system/Profile';

export default {
  title: 'Systems/Profile',
  component: Profile,
};

export const Default = () => (
  <Profile
    id= '1'
    userName='남강우'
    statusMessage='Brand New 2020'
    onDeleteClick= {()=>{}}
  />
);


export const withNoStatus = () => (
  <Profile
    id='2'
    userName='남강우'
    statusMessage=''
    onDeleteClick= {()=>{}}

  />
);
