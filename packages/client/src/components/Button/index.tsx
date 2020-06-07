import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import * as S from 'components/Button/styles'

interface ButtonProp {
  /** 버튼안에 들어갈 텍스트 */
  text: string;
  /** theme */
  theme?: 'primary' | 'secondary' | 'tertiary';
  /** 사용가능한 버튼인지 */
  isAllowd?: boolean;
  /** 클릭 핸들러 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 *
 *  - `text` 가 너무 길 경우 ... 로 표시되어 나타나지 않습니다.
 * - `onClick`에 props로 핸들러를 전달할 수 있습니다.
 */
const Button: FC<ButtonProp> = ({
  text,
  theme = 'primary',
  isAllowd = true,
  onClick,
}) => (
  <ThemeProvider theme={S.themeMap[theme]}>
    <S.Button
      type='button'
      isAllowed={isAllowd}
      onClick={onClick}
      >
      {text}
    </S.Button>
  </ThemeProvider>

)

export default Button
