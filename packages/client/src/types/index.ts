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
