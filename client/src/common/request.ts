import axios, { AxiosRequestConfig } from 'axios';
import { configs } from './constants';
import { boolean } from '@storybook/addon-knobs';
const { API_SERVER_URL } = configs;

const instance = axios.create({
  baseURL: API_SERVER_URL,
  timeout: 1000,
  timeoutErrorMessage: '서버가 응답하지 않습니다.',
  withCredentials: true,
});

const Axios = async (config: AxiosRequestConfig) => instance.request(config);
const getProfile: AxiosRequestConfig = {
  method: 'GET',
  url: 'user/my-profile',
};
const getFriendList: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/friend-list',
};
const getChatList: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/chat-list',
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
  getUserInfo: () => Axios(getUserInfo),
};

export default request;
