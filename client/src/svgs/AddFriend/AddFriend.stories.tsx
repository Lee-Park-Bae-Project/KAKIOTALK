import React from 'react';
import AddFriend from './index';

export default {
  title: 'Svg/AddFriend',
  component: AddFriend,
};

export const AddFriendBasic = () => <AddFriend />;

export const AddFriendSmall = () => <AddFriend size='small'/>;

export const AddFriendMedium = () => <AddFriend size='medium'/>;

export const AddFriendLarge = () => <AddFriend size='large'/>;

export const AddFriendSelectedSmall = () => <AddFriend selected size='small'/>;

export const AddFriendSelectedMedium = () => <AddFriend selected size='medium' />;

export const AddFriendSelectedLarge = () => <AddFriend selected size='large'/>;
