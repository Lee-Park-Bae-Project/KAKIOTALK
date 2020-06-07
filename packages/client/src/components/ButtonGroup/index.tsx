import React, { FC } from 'react'
import * as S from 'components/ButtonGroup/styles'

interface Props{
  /** 정렬 방향 */
  direction?: 'row' | 'col';
  /** 버튼들을 오른쪽에 정렬할 때 이용 */
  right?: boolean;
  /** 보여줄 버튼들 */
  children: React.ReactNode;
}

/**
 * 여러 버튼을 묶어서 보여줍니다.
 * children 으로 전달받은 버튼들을 나열합니다.
 */
const ButtonGroup: FC<Props> = ({
  direction = 'row',
  right = false,
  children,
}) => (
    <S.default
      direction={direction}
      right={right}
    >
      {children}
    </S.default>
)

export default ButtonGroup
