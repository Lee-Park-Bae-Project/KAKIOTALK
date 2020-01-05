import React from 'react';
import Account from './index';

export default {
  title: 'Svg/Account',
  component: Account,
};

export const AccountBasic = () => <Account/>;

export const AccountSmall = () => <Account size='small'/>;

AccountSmall.story = {
  parameters: {
    docs: {
      storyDescription: '** Small Account **',
    },
  },
};

export const AccountMedium = () => <Account size='medium'/>;

AccountMedium.story = {
  parameters: {
    docs: {
      storyDescription: '** Medium Account **',
    },
  },
};


export const AccountLarge = () => <Account size='large'/>;

AccountLarge.story = {
  parameters: {
    docs: {
      storyDescription: '** Large Account **',
    },
  },
};
