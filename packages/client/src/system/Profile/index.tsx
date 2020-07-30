import React, {
  FC, Fragment, useEffect, useState,
} from 'react'
import * as S from 'system/Profile/styles'
import Icon from 'Icon/Icon'
import { color } from 'styles/global'
import TextIcon from 'components/TextIcon'
import { Link } from 'react-router-dom'
import Hr from 'atoms/Hr'
import {
  useDispatch, useSelector,
} from 'react-redux'
import { updateProfile } from 'modules/profile'
import { alert } from 'common/utils'
import { deleteFriend } from 'modules/friends'
import { makeRoomRequest } from 'modules/room'
import { throttle } from 'lodash'
import { getProfile } from 'common/request'
import { RootState } from 'modules'
import { useInput } from 'hooks'

interface Prop {
  /** 유져 식별자 */
  uuid: string
  /** 유저 이름 */
  name: string
  /** 상태메시지 */
  statusMessage: string
  /** 프로필닫기 핸들러 */
  handleCloseClick: () => void
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
  statusMessage,
  handleCloseClick,
  imageUrl = null,
  profileRef,
  isMyProfile,
  isOverflow,
}) => {
  interface InviteUser{
    uuid: string;
    name: string;
  }

  const [isEditMode, setIsEditMode] = useState(false)
  const editName = useInput(name)
  const editStatusMessage = useInput(statusMessage || '')
  const dispatch = useDispatch()

  const myProfile = useSelector((state: RootState) => state.profile)

  const login = useSelector((state: RootState) => state.login)
  const [selectedList, setSelectedList] = useState([{
    uuid, name,
  }])

  const handleEditClick = () => {
    if (isEditMode) {
      if (editName.value.length === 0) {
        alert.error('이름을 입력해주세요!')
        return
      }

      if (editName.value !== name || editStatusMessage.value !== statusMessage) {
        dispatch(
          updateProfile({
            name: editName.value,
            statusMessage: editStatusMessage.value,
          }),
        )
      }
    }
    setIsEditMode(!isEditMode)
  }

  const onDeleteClick = () => {
    alert.confirmDelete(name).then((confirm) => {
      if (confirm) {
        dispatch(deleteFriend(uuid))
      }
    })
  }
  const onChatClick = () => {
    const {
      uuid: userUuid, name: userName,
    } = myProfile
    dispatch(makeRoomRequest(selectedList.concat({
      uuid, name,
    })))
  }
  const [slideMount, setSlideMount] = useState(0)
  const [startPoint, setStartPoint] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartPoint(e.touches[0].screenY)
  }
  let ThrottledhandleTouch = (touches: React.TouchList) => {
    if (startPoint < touches[0].screenY) {
      setSlideMount(Math.ceil((touches[0].screenY - startPoint) / 10))
    } else {
      setSlideMount(0)
    }
  }
  ThrottledhandleTouch = throttle(ThrottledhandleTouch, 60)
  const handleTouch = (e: React.TouchEvent) => {
    ThrottledhandleTouch(e.touches)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (slideMount >= 10) {
      setSlideMount(100)
      setTimeout(handleCloseClick, 500)
    } else {
      setSlideMount(0)
    }
  }
  return (
    <S.Container
      ref={profileRef}
      isOverflow={isOverflow}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouch}
      onTouchEnd={handleTouchEnd}
      slideMount={slideMount}
    >
      <S.CloseButton>
        <Icon
          icon='Close'
          size='1.5rem'
          color={color.WHITE}
          onClick={handleCloseClick}
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
            <S.Label isEmpty={editName.value.length === 0}>
              이름 ({editName.value.length}/20)
            </S.Label>
            <S.Input
              {...editName}
              placeholder={'이름'}
              maxLength={20}
            />
            <S.Label>상태 메시지 ({editStatusMessage.value.length}/40)</S.Label>
            <S.Input
              {...editStatusMessage}
              placeholder={'상태 메시지'}
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
            <S.ButtonWrapper >
            <TextIcon
              icon='Edit'
              color={color.WHITE}
              text={isEditMode ? '저장' : '프로필 수정'}
              iconPosition='top'
              textColor={color.WHITE}
              size='1.2rem'
              textSize='0.8rem'
              onClick={handleEditClick}
            />
            </S.ButtonWrapper>

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
                <S.ButtonWrapper>
                <TextIcon
                  icon='ChatFilled'
                  color={color.WHITE}
                  text='1:1 채팅'
                  textColor={color.WHITE}
                  iconPosition='top'
                  size='1.2rem'
                  textSize='0.8rem'
                  onClick={onChatClick}
                />
                </S.ButtonWrapper>

              </Link>
              <S.ButtonWrapper>
              <TextIcon
                icon='Delete'
                color={color.WHITE}
                text='친구 삭제'
                textColor={color.WHITE}
                iconPosition='top'
                onClick={onDeleteClick}
                size='1.2rem'
                textSize='0.8rem'
              />
              </S.ButtonWrapper>
            </Fragment>
          )}
        </S.Footer>
      </S.ProfileWrapper>
    </S.Container>
  )
}
export default Profile
