import axios, { AxiosRequestConfig } from 'axios'
import {
  GOOGLE_PROFILE_URL,
  GOOGLE_TOKEN_REFRESH_URL,
  GOOGLE_TOKEN_URL,
} from '../configs'
import * as httpError from '../common/error'
import {
  GetProfileFromGoogle,
  GetTokenFromGoogle,
  RefreshAccessToken,
} from '../types'

const instance = axios.create({
  timeout: 3000,
  timeoutErrorMessage: '서버가 응답하지 않습니다.',
})

const request = async <T>(config: AxiosRequestConfig) => {
  try {
    const response = await instance.request<T>(config)
    return response.data
  } catch (e) {
    throw httpError.ERROR_OCCURED
  }
}

export const getTokenFromGoogle = async (code: string) => request<GetTokenFromGoogle>({
  method: 'POST',
  url: GOOGLE_TOKEN_URL(code),
})

export const getProfileFromGoogle = async (googleAccessToken: string) => request<GetProfileFromGoogle>({
  method: 'GET',
  url: GOOGLE_PROFILE_URL,
  headers: { Authorization: `Bearer ${googleAccessToken}` },
})

export const refreshAccessToken = async (refreshToken: string) => request<RefreshAccessToken>({
  method: 'get',
  url: GOOGLE_TOKEN_REFRESH_URL(refreshToken),
})
