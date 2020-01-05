import React, { FC } from 'react';
import StyledButton from './styles';
import { color } from '../../styles/global';

interface ButtonProp {
  /** 버튼안에 들어갈 텍스트 */
  text: string;
  /** 버튼 색깔 */
  bgColor?: string;
  /** 클릭 핸들러 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
  <StyledButton
    type='button'
    background={bgColor}
    onClick={onClick}
  >
    {text}
  </StyledButton>
);

export default Button;
