/* eslint-disable camelcase */
/* eslint-disable max-len */

import axios, { AxiosRequestConfig } from 'axios'

const URL = { userInfo: '/userinfo/v2/me' }

const Axios = axios.create({
  baseURL: 'https://www.googleapis.com',
  headers: {},
})

const configs = { getUserInfo: (accessToken: string): AxiosRequestConfig => ({
  url: URL.userInfo,
  method: 'get',
  headers: { Authorization: `Bearer ${accessToken}` },
}) }

interface IUserInfo {
  id: string;
  email: string;
  verified_email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

export default { getUserInfo: (accessToken: string) => Axios.request<IUserInfo>(configs.getUserInfo(accessToken)) }
