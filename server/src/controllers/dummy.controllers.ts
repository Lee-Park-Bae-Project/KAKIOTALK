import {Request, NextFunction, Response} from 'express'
import { response } from '../common/utils';

import shortid from 'shortid';
import faker from 'faker';
export interface User {
  id: string;
  userName: string;
  statusMessage: string;
}
export interface ChatRoom {
  id: string;
  userList: string[];
  lastMessage: string;
  lastModified: number;
  numOfNewMessages: number;
}
const makeChatList = (num: number) => {
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

const makeUsers = (num: number) => {
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

const [myProfile] = makeUsers(1);
const friendList = makeUsers(15);
const chatList = makeChatList(15);

const getProfile = (req: Request, res: Response, next: NextFunction) => {
  return response(res, myProfile)
}

const getFriendList = (req: Request, res: Response, next: NextFunction) => {
  return response(res, friendList)
}

const getChatList = (req: Request, res: Response, next: NextFunction) => {
  return response(res, chatList)
}

export {
  getProfile,
  getFriendList,
  getChatList
}