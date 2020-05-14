import React,{FC} from 'react';
import * as S from './style'

interface Props {
  children:React.ReactNode,
  onClose? : (e : React.MouseEvent<HTMLDivElement,MouseEvent>)=>void
}

const PopUp:FC<Props> = ({children,onClose})=>{

  return (
    <S.PopUp onClick={onClose}>
      <S.PopUpInner>
        {children}
      </S.PopUpInner>
    </S.PopUp>
  )
}
export default PopUp