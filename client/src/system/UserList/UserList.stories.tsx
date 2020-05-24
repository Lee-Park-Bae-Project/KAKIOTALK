import React from 'react';
import UserList from 'system/UserList';
import shortid from 'shortid';
import faker from 'faker';

export default {
  title: 'Systems/UserList',
  component: UserList,
};

const myProfile = {
  uuid: shortid.generate(),
  email:faker.internet.email(),
  name: faker.internet.userName(),
  statusMessage: faker.lorem.lines(),
};

const userList = [
  {
    uuid: shortid.generate(),
    name: faker.internet.userName(),
    email:faker.internet.email(),
    statusMessage: faker.lorem.lines(),
  },
  {
    uuid: shortid.generate(),
    name: faker.internet.userName(),
    email:faker.internet.email(),
    statusMessage: faker.lorem.lines(),
  },
];

export const DefaultUserCard = () => {
  const onClick = (id: string) => () => {
    alert(id);
  };
  return (
    <UserList
      myProfile={myProfile}
      userList={userList}
      onClick={onClick}
    />
  );
};
