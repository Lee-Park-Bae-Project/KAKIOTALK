import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import * as Type from 'types';
import { configs } from './constants';

const { API_SERVER_URL } = configs;

const instance = axios.create({
  baseURL: API_SERVER_URL,
  timeout: 3000,
  timeoutErrorMessage: '서버가 응답하지 않습니다.',
  withCredentials: true,
});

export type ResponseType<T> = {
  success: boolean;
  data: T;
}

export type ApiCallback<T = {}> = (
  err: AxiosResponse<ResponseType<T>> | null,
  response?: AxiosResponse<ResponseType<T>>,
) => void

async function Axios<T>(config: AxiosRequestConfig) {
  return instance.request<ResponseType<T>>(config);
}

const getProfile: AxiosRequestConfig = {
  method: 'GET',
  url: 'user/my-profile',
};
const getFriendList: AxiosRequestConfig = {
  method: 'GET',
  url: 'social/friend-list',
};
const getChatList: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/chat-list',
};
const getLogout: AxiosRequestConfig = {
  method: 'GET',
  url: 'auth/logout',
};
const getUserInfo: AxiosRequestConfig = {
  method: 'GET',
  url: 'auth/check-auth',
};

const getLogin = (
  googleId: string,
  email: string,
  name: string,
  googleAccessToken: string,
): AxiosRequestConfig => ({
  method: 'POST',
  url: 'auth/google',
  data: {
    googleId,
    email,
    name,
    googleAccessToken,
  },
});

const getRooms: AxiosRequestConfig = {
  method: 'GET',
  url: 'chat/room',
};

const addFriend = (email: string): AxiosRequestConfig => ({
  method: 'POST',
  url: 'social/add-friend',
  data: { email },
});

const removeFriend = (googleId: string): AxiosRequestConfig => ({
  method: 'POST',
  url: 'social/remove-friend',
  data: { googleId },
});
const request = {
  getProfile: () => Axios(getProfile),
  getFriendList: () => Axios(getFriendList),
  getChatList: () => Axios(getChatList),
  getLogin: (
    googleId: string,
    email: string,
    name: string,
    googleAccessToken: string,
  ) => Axios(getLogin(googleId, email, name, googleAccessToken)),
  getUserInfo: () => Axios<Type.User2>(getUserInfo),
  getRooms: () => Axios<Type.IRoom[]>(getRooms),
  addFriend: (friendEmail: string) => Axios(addFriend(friendEmail)),
  removeFriend: (frinedGoogleId: string) => Axios(removeFriend(frinedGoogleId)),
  getLogout: () => Axios(getLogout),
};

export default request;
