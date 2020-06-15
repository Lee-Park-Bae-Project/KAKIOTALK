import React, {
  FC, useRef, useState,
} from 'react'
import styled from 'styled-components'
import { color } from 'styles/global'
import Icon from 'Icon/Icon'
import {
  Dialog, PopUp,
} from 'components'
import { getLogout } from 'common/request'
import { logoutAction } from 'modules/login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const S = { Container: styled.div`
    width: fit-content;
    height: fit-content;
  ` }

interface LogoutProp {
  size?: string
}

const LogoutTab: FC<LogoutProp> = ({ size = '1.5rem' }) => {
  const [isClicked, setClicked] = useState(false)
  const onClick = () => {
    setClicked(!isClicked)
  }
  const dispatch = useDispatch()
  const history = useHistory()
  const confirmLogout = () => {
    getLogout()
      .then((response) => {
        history.push('/login')
      })
      .catch((error) => {
        console.error(error)
      })
    dispatch(logoutAction())
    onClick()
  }
  const dialogRef = useRef(null)
  return (
    <S.Container>
      <Icon icon='logout' color={color.WHITE} size={size} onClick={onClick}/>
      {isClicked ? (
        <PopUp refs={dialogRef} onClose={onClick}>
          <Dialog
            dialogRef={dialogRef}
            isVisible={true}
            title='정말로 로그 아웃 하시겠습니까?'
            isHideButton={false}
            canCancel={true}
            cancelText='취소'
            confirmText='확인'
            onConfirm={confirmLogout}
            onCancel={onClick}
          ></Dialog>
        </PopUp>
      ) : null}
    </S.Container>
  )
}
export default LogoutTab
