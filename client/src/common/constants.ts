import dotenv from 'dotenv';

dotenv.config();

const sizeMap = {
  small: 24,
  medium: 36,
  large: 48,
};

export default sizeMap;

const SOCKET_URL = 'localhost:3050';
const API_SERVER_URL = 'http://localhost:3050/v1/';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;
export const configs = {
  SOCKET_URL,
  API_SERVER_URL,
  CLIENT_ID,
  PUBLIC_URL,
};
