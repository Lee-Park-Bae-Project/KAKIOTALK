import React, { FC } from 'react'
import * as S from 'system/List/styles'

interface Props{}

const List: FC<Props> = ({ children }) => (
    <S.Container>
      {children}
    </S.Container>
)

export default List
