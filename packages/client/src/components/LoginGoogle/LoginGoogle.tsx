import React, { useEffect } from 'react'
import * as request from 'common/request'
import { useLocation } from 'react-router'
import { googleLoginSuccess } from 'modules/login'
import { useDispatch } from 'react-redux'
import * as S from './LoginGoogle.styled'

const LoginGoogle = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const handleClick = async () => {
    const data = await request.googleLogin()
    window.location.href = data.loginUrl
    // push(data.loginUrl)
  }

  useEffect(() => {
    const login = location.search.split('=')[1]
    if (login) {
      dispatch(googleLoginSuccess())
    }
  }, [])

  return (
    <>
      <S.LoginGoogleButton type="button" onClick={handleClick}/>
    </>
  )
}

export default LoginGoogle
