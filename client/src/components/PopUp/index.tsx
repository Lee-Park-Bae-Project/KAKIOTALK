import React,{FC} from 'react';
import * as S from './style'

interface Props {
  children:React.ReactNode
}

const PopUp:FC<Props> = ({children})=>{

  return (
    <S.PopUp>
      <S.PopUpInner>
        {children}
      </S.PopUpInner>
    </S.PopUp>
  )
}
export default PopUp