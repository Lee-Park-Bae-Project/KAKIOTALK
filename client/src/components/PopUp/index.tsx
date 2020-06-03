import React,{FC} from 'react';
import * as S from './style'

interface Props {
  children:React.ReactNode,
  onClose? : (e : React.MouseEvent<HTMLDivElement,MouseEvent>)=>void
  refs?: React.RefObject<HTMLDivElement>
}

const PopUp:FC<Props> = ({children,onClose,refs})=>{

  return (
    <S.PopUp onClick={onClose}>
      <S.PopUpInner ref = {refs}>
        {children}
      </S.PopUpInner>
    </S.PopUp>
  )
}
export default PopUp