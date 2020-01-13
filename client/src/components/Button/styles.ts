import styled, { ThemeProvider } from 'styled-components';
import { darken } from 'polished';
import { color, fontSize, weight } from '../../styles/global';

export const themeMap = {
  primary: {
    background: color.YELLO,
  },
  secondary: {
    background: color.RED,
  },
  tertiary: {
    background: color.GRAY,
  },
};
interface ButtonProp{
  isAllowed: boolean;
}

export const Button = styled.button<ButtonProp>`
  width: 5rem;
  height: 2rem;
  color: ${color.BLACK};
  font-size: ${fontSize.SMALL};
  font-weight: ${weight.NORMAL};

  margin: 0.5rem;

  background-color: ${(props) => props.theme.background};

  outline: none;
  border-radius: 1rem;
  border: none;
  cursor: ${(props) => (props.isAllowed ? 'pointer' : 'not-allowed')};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;


  &:hover{
    background-color: ${(props) => darken(0.1, props.theme.background)};
  }
`;
