import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    /* height: 100vh; */
    box-sizing: border-box;
    /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto [Removing the "Helvetica Neue",Arial,sans-seri; */
  }
`;

export const color = {
  YELLO: '#F7CF46',
  WHITE: '#FEFFFF',
  BROWN: '#403631',
  RED: '#DD6F5A',
  GRAY: '#C6C3C1',
  BLACK: '#4B4B4B',
  TEXT_BLACK: '#262525',
  TEXT_GRAY: '#737373',
  ROOM_COLOR: '#C0D1DB',
};

export const fontSize = {
  SMALL: '0.8rem',
  MEDIUM: '1rem',
  LARGE: '1.2rem',
};

export const weight = {
  WEAK: 400,
  NORMAL: 600,
  STRONG: 800,
};

export default Global;
