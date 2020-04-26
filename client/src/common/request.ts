import axios, { AxiosRequestConfig } from 'axios';
import { configs } from './constants';

const { API_SERVER_URL } = configs;

const instance = axios.create({
  baseURL: API_SERVER_URL,
  timeout: 1000,
  timeoutErrorMessage: '서버가 응답하지 않습니다.',
  withCredentials: true
});

const Axios = async (config: AxiosRequestConfig) => instance.request(config);

const apiConfig: { [key: string]: AxiosRequestConfig } = {};
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
const getLogin = (props: object): AxiosRequestConfig => ({
  method: 'POST',
  url: 'login',
  headers: props
});

const request = {
  getProfile: () => Axios(apiConfig.getProfile),
  getFriendList: () => Axios(apiConfig.getFriendList),
  getChatList: () => Axios(apiConfig.getChatList),
  getLogin: () => Axios(apiConfig.getLogin)
};

export default request;
