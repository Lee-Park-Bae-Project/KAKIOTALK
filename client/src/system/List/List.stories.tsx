import React from 'react';
import List from 'system/List';
import Profile from 'system/Profile';
import UserCard from 'components/UserCard';

export default {
  title: 'Systems/List',
  component: List,
};

export const Default = () => (
    <List>
      <Profile
        id='asd'
        statusMessage='asd'
        userName='asd'
      />
      <Profile
        id='asd'
        statusMessage='asd'
        userName='asd'
      />
      <Profile
        id='asd'
        statusMessage='asd'
        userName='asd'
      />
    </List>
);

export const UserCardList = () => (
    <List>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
    <UserCard userName='junow' statusMessage='Brand New 2020'/>
  </List>
);
