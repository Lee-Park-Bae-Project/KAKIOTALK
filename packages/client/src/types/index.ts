export interface User {
  uuid: string;
  email: string;
  name: string;
  statusMessage: string;
}
export interface loginInfo {
  isLoggedIn: boolean;
}

export interface Room {
  uuid: string;
  participants: Pick<User, 'uuid' | 'name' | 'email' | 'statusMessage'>[];
}

export interface IChat {
  id: number;
  uuid: string;
  roomParticipantsId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiChat extends Pick<IChat, 'uuid' | 'content' | 'createdAt' | 'updatedAt'> {
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
