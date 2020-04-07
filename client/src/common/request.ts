import axios, { AxiosRequestConfig } from 'axios';
import { configs } from './constants';

const { API_SERVER_URL } = configs;

const instance = axios.create({
  baseURL: API_SERVER_URL,
  timeout: 1000,
  timeoutErrorMessage: '서버가 응답하지 않습니다.',
  withCredentials: true,
});

export const getProfile: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/my-profile',
};

export const getFriendList: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/friend-list',
};

export const getChatList: AxiosRequestConfig = {
  method: 'GET',
  url: 'dummy/chat-list',
};

export const Axios = async (config: AxiosRequestConfig) => instance.request(config);
