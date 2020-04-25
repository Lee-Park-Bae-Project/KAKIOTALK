import axios, { AxiosRequestConfig } from 'axios';
import { configs } from './constants';

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
  url: 'dummy/my-profile',
};
const getFriendList: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/friend-list',
};
const getChatList: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/chat-list',
};

const login = (
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
  login: (
    googleId: string,
    email: string,
    name: string,
    googleAccessToken: string
  ) => Axios(login(googleId, email, name, googleAccessToken)),
};

export default request;
