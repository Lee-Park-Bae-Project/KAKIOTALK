import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonProp{
  background: string;
}

const Button = styled.button<ButtonProp>`
  width: 5rem;
  height: 2rem;

  background-color: ${(props) => props.background};

  outline: none;
  border-radius: 1rem;
  border: none;
  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:active{
    background-color: ${(props) => darken(0.1, props.background)};
  }
`;

export default Button;
