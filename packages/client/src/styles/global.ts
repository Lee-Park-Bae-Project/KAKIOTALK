import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family : verdana;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: #c1c1c1; 
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
}
`

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
  HOVER_GRAY: '#F1F2F2',
  LIGHT_GRAY: '#FAFAFA',
} as const

export const fontSize = {
  SMALL: '0.8rem',
  MEDIUM: '1rem',
  LARGE: '1.2rem',
}

export const weight = {
  WEAK: 200,
  NORMAL: 400,
  STRONG: 600,
}

export default Global
