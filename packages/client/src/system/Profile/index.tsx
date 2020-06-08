import React, {
  FC, Fragment, useEffect, useState,
} from 'react'
import * as S from 'system/Profile/styles'
import Icon from 'Icon/Icon'
import { color } from 'styles/global'
import TextIcon from 'components/TextIcon'
import { Link } from 'react-router-dom'
import Hr from 'atoms/Hr'
import { useDispatch } from 'react-redux'
import { updateProfile } from 'modules/profile'
import { alert } from 'common/utils'

interface Prop {
  /** 유져 식별자 */
  uuid: string
  /** 유저 이름 */
  name: string
  /** 상태메시지 */
  statusMessage: string
  /** 프로필닫기 핸들러 */
  onCloseClick: () => void
  /** 프로필 이미지 URL */
  imageUrl: string
  /** 프로필 팝업 ref */
  profileRef: React.RefObject<HTMLDivElement>
  /** 본인 or 친구의 프로필 구별 */
  isMyProfile: boolean
  /** 프로필 창 oveflow 여부 */
  isOverflow: boolean
}

/**
 * 친구 목록을 하나 클릭 했을 때 뜨는 Modal 에 들어갈 내용
 */
const Profile: FC<Prop> = ({
  uuid,
  name,
  statusMessage = '',
  onCloseClick,
  imageUrl = null,
  profileRef,
  isMyProfile,
  isOverflow,
}) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [editName, setEditName] = useState(name)
  const [editStatusMessage, setEditStatusMessage] = useState(statusMessage)
  const onChangename = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value)
  }
  const onChangeStatusMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditStatusMessage(e.target.value)
  }
  const dispatch = useDispatch()
  const onEditClick = () => {
    if (isEditMode) {
      if (editName.length === 0) {
        alert.error('이름을 입력해주세요!')
        return
      }

      if (editName !== name || editStatusMessage !== statusMessage) {
        dispatch(
          updateProfile({
            name: editName,
            statusMessage: editStatusMessage,
          }),
        )
      }
    }
    setIsEditMode(!isEditMode)
  }

  return (
    <S.Container ref={profileRef} isOverflow={isOverflow}>
      <S.CloseButton>
        <Icon
          icon='Close'
          size='1.5rem'
          color={color.WHITE}
          onClick={onCloseClick}
        />
      </S.CloseButton>
      <S.ProfileWrapper>
        {imageUrl ? (
          <S.Image src={imageUrl} big={true} />
        ) : (
          <Icon icon='PersonFilled' color={color.GRAY} size='4rem' />
        )}
        {isMyProfile && isEditMode ? (
          <S.EditWrapper>
            <S.Label isEmpty={editName.length === 0}>
              이름 ({editName.length}/20)
            </S.Label>
            <S.Input
              value={editName}
              placeholder={'이름'}
              onChange={onChangename}
              maxLength={20}
            />
            <S.Label>상태 메시지 ({editStatusMessage.length}/40)</S.Label>
            <S.Input
              value={editStatusMessage}
              placeholder={'상태 메시지'}
              onChange={onChangeStatusMessage}
              maxLength={40}
            />
          </S.EditWrapper>
        ) : (
          <Fragment>
            <S.NameWrapper>{name}</S.NameWrapper>
            {statusMessage && (
              <S.StatusWrapper>{statusMessage}</S.StatusWrapper>
            )}
          </Fragment>
        )}

        <Hr />
        <S.Footer>
          {isMyProfile ? (
            <TextIcon
              icon='Edit'
              color={color.WHITE}
              text={isEditMode ? '저장' : '프로필 수정'}
              iconPosition='top'
              textColor={color.WHITE}
              onClick={onEditClick}
            />
          ) : (
            <Fragment>
              <Link
                to={{
                  pathname: '/chat',
                  state: {
                    uuid,
                    name,
                  },
                }}
                style={{ textDecoration: 'none' }}
              >
                <TextIcon
                  icon='ChatFilled'
                  color={color.WHITE}
                  text='1:1 채팅'
                  textColor={color.WHITE}
                  iconPosition='top'
                />
              </Link>
              <TextIcon
                icon='Delete'
                color={color.WHITE}
                text='친구 삭제'
                textColor={color.WHITE}
                iconPosition='top'
                onClick={onCloseClick}
              />
            </Fragment>
          )}
        </S.Footer>
      </S.ProfileWrapper>
    </S.Container>
  )
}
export default Profile
