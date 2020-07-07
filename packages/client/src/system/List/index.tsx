import React, { FC } from 'react'
import * as S from 'system/List/styles'

const List: FC = ({ children }) => (
    <S.Container >
      {children}
    </S.Container>
)

export default List
