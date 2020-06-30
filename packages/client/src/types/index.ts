import {
  Chat, User,
} from '@kakio/common'

export interface LoginInfo {
  isLoggedIn: boolean;
}

export interface ApiChat extends Pick<Chat, 'uuid' | 'content' | 'createdAt' | 'updatedAt'> {
  metaInfo: {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    sender: User;
    room: {
      uuid: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}
export type ReduxState<T> = {
  isLoading: boolean;
  data: T;
}

export type ReduxChatType = {
  [key: string]: ApiChat[];
}

export type SimpleUserType = Pick<User, 'uuid'| 'name' | 'email' | 'statusMessage' | 'imageUrl'>

export interface ApiUser extends SimpleUserType {
  uuid: string;
  name: string;
  email: string;
  statusMessge: string;
  imageUrl: string;
}
export type InviteUserType = Pick<User, 'uuid' | 'name'>
export interface InviteUser extends InviteUserType{
  uuid: string;
  name: string;
}
