import axios, { AxiosRequestConfig } from 'axios';
import { configs } from './constants';
import { Profile } from 'types';
const { API_SERVER_URL } = configs;

const instance = axios.create({
  baseURL: API_SERVER_URL,
  timeout: 1000,
  timeoutErrorMessage: '서버가 응답하지 않습니다.',
  withCredentials: true
});

const Axios = async (config: AxiosRequestConfig) => instance.request(config);

//const apiConfig: { [key: string]: AxiosRequestConfig } = {};
const getProfile: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/my-profile'
};
const getFriendList: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/friend-list'
};
const getChatList: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/chat-list'
};
const getLogin = (
  googleId: string,
  email: string,
  name: string
): AxiosRequestConfig => ({
  method: 'POST',
  url: 'dummy/login',
  data: {
    googleId,
    email,
    name
  }
});

const request = {
  getProfile: () => Axios(getProfile),
  getFriendList: () => Axios(getFriendList),
  getChatList: () => Axios(getChatList),
  getLogin: (googleId: string, email: string, name: string) =>
    Axios(getLogin(googleId, email, name))
};

export default request;
