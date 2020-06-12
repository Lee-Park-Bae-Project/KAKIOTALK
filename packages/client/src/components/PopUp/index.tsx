import React, { FC } from 'react'
import { useOutsideClick } from 'common/utils'
import * as S from './style'

interface Props {
  /** 팝업 내용으로 들어갈 컴포넌트 */
  children: React.ReactNode,
  /** 팝업 바깥을 클릭했을 때 동작할 close 핸들러 */
  onClose: () => void
  /** 팝업 컴포넌트의 ref */
  refs: React.RefObject<HTMLDivElement>
}

const PopUp: FC<Props> = ({
  children, refs, onClose,
}) => {
  useOutsideClick(refs, onClose)
  return (
    <S.PopUp>
        {children}
    </S.PopUp>
  )
}
export default PopUp
