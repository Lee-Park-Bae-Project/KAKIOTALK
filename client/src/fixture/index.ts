import shortid from 'shortid';
import faker from 'faker';
import { ChatRoom } from 'modules/ChatRoomList';
import { User } from 'modules/userlist';

const getChatList = (num: number) => {
  const list: ChatRoom[] = [];
  for (let i = 0; i < num; i += 1) {
    list.push({
      id: shortid.generate(),
      userList: [faker.internet.userName(),
        faker.internet.userName(),
        faker.internet.userName()],
      lastMessage: faker.lorem.sentence(),
      lastModified: Date.now(),
      numOfNewMessages: Math.round(Math.random() * 100),
    });
  }
  return list;
};

const getUsers = (num: number) => {
  const list: User[] = [];
  for (let i = 0; i < num; i += 1) {
    list.push({
      id: shortid.generate(),
      userName: faker.internet.userName(),
      statusMessage: faker.lorem.lines(),
    });
  }
  return list;
};

export const [myProfile] = getUsers(1);
export const friendList = getUsers(15);


export const chatList = getChatList(15);
