import React, { FC } from 'react';
import UserCard from './index';

export default {
  title: 'Component/Basic/UserCard',
  component: UserCard,
};

export const BasicUserCard: FC = () => (
  <UserCard
    userName={'junow'}
    />
);

export const VerticalUserCard: FC = () => (
  <UserCard
    userName={'junow'}
    direction={'ver'}
  />
);

export const UserCardWithClickHandler: FC = () => {
  const userName = 'junow';
  const onClick = () => alert(userName);
  return (
    <UserCard
      userName={userName}
      onClick={onClick}
    />
  );
};
