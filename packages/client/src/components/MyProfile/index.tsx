import React, {
  FC, useEffect, useState,
} from 'react'
import * as S from 'system/Profile/styles'
import Icon from 'Icon/Icon'
import { color } from 'styles/global'
import {
  SearchInput, TextIcon,
} from 'components'
import { useDispatch } from 'react-redux'
import { alert } from 'common/utils'
import { updateProfile } from 'modules/profile'

interface Prop {
  /** 유져 식별자 */
  uuid: string;
  /** 유저 이름 */
  name: string;
  /** 상태메시지 */
  statusMessage: string;
}
const MyProfile: FC<Prop> = ({
  uuid, name, statusMessage,
}) => {
  const dispatch = useDispatch()
  const [updateMode, setUpdateMode] = useState(false)
  const [updateName, setUpdateName] = useState(name)
  const [updateMessage, setUpdateMessage] = useState(statusMessage || '')
  const onUpdateClick = () => {
    if (updateMode) {
      if (updateName === '') {
        alert.error('이름을 입력해주세요!')
        return
      }
      dispatch(
        updateProfile({
          name: updateName, statusMessage: updateMessage,
        }),
      )
    }
    setUpdateMode(!updateMode)
  }
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateName(e.target.value)
  }
  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateMessage(e.target.value)
  }
  const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onUpdateClick()
  }
  return (
    <S.Container>
      <Icon icon="PersonFilled" color={color.GRAY} size="4rem" />
      <S.NameWrapper>
        {updateMode ? (
          <SearchInput
            value={updateName}
            onChange={onNameChange}
            placeholder={'이름'}
            onKeyPress={onEnterPress}
          />
        ) : (
          name
        )}
      </S.NameWrapper>
      <S.StatusWrapper>
        {updateMode ? (
          <SearchInput
            value={updateMessage}
            onChange={onMessageChange}
            placeholder={'상태메시지'}
            onKeyPress={onEnterPress}
          />
        ) : (
          statusMessage
        )}
      </S.StatusWrapper>
      <S.Footer>
        <TextIcon
          icon={updateMode ? 'Confirm' : 'EditProfile'}
          color={color.BLACK}
          text={updateMode ? '저장' : '프로필 관리'}
          textColor={color.BLACK}
          iconPosition="top"
          onClick={onUpdateClick}
        />
      </S.Footer>
    </S.Container>
  )
}

export default MyProfile
