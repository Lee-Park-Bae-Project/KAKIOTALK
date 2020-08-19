/* eslint-disable no-param-reassign */
export const isProduction = () => {
  return process.env.NODE_ENV === 'production'
}

export const getNodeEnv = () => {
  return process.env.NODE_ENV ?? 'development'
}

export const isString = (s: any) => typeof s === 'string'
export const isNumber = (n: number) => typeof n === 'number'
