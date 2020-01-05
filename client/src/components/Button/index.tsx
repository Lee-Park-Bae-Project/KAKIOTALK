import React, { FC } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { color } from '../../styles/global';

interface StyleProp{
  background: string;
}
const S = {
  Button: styled.button<StyleProp>`
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
  `,
};

interface ButtonProp {
  /** 이름이다 */
  text: string;
  /** 백그라운드다 */
  bgColor?: string;
  /** 핸들러다 */
  onClick?: any;
}

/**
 * 기본적인 버튼입니다.
 *
 * - `text` 에 표시하고싶은 글자를 입력하세요.
 *  - `text` 가 너무 길 경우 ... 로 표시되어 나타나지 않습니다.
 * - `background` 에 원하는 색상을 입력하세요.
 * - `onClick`에 props로 핸들러를 전달할 수 있습니다.
 */
const Button: FC<ButtonProp> = ({
  text,
  bgColor = color.YELLO,
  onClick,
}) => (
  <S.Button
    type='button'
    background={bgColor}
    onClick={onClick}
  >
    {text}
  </S.Button>
);

export default Button;
