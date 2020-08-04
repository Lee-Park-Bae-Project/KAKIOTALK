import React from 'react'
import Icon from 'Icon/Icon'
import { useHistory } from 'react-router-dom'
import * as S from './styles'

interface Props{
  roomName: string
  toggleSearchBar: () => void
}
const Header: React.FC<Props> = ({ roomName, toggleSearchBar }) => {
  const history = useHistory()

  const handleBack = () => {
    history.goBack()
  }

  return (
    <S.Container>
      <Icon icon="ArrowLeft" onClick={handleBack}/>
      <S.Title>{roomName}</S.Title>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: 'auto 0.5rem' }}>
          <Icon
            icon="Search"
            size="1rem"
            // css={{ margin: 'auto 0.5rem' }}
            onClick={toggleSearchBar}
          />
        </div>
        <Icon icon="Menu"/>
      </div>
    </S.Container>
  )
}
export default React.memo(Header)
