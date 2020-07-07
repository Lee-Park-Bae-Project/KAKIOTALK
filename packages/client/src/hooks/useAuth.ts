import {
  useEffect, useState,
} from 'react'
import * as request from 'common/request'
import { AxiosError } from 'axios'
import { url } from 'common/constants'
import { useDispatch } from 'react-redux'
import {
  loginFailure, loginSuccess,
} from 'modules/login'
import { useHistory } from 'react-router-dom'

const useAuth = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isLoaded, setLoaded] = useState(false)
  const [isLoggedIn, setLogin] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    uuid: '',
    statusMessage: '',
    imageUrl: '',
  })
  useEffect(() => {
    request.getUserInfo().then((response) => {
      setLoaded(true)
      setLogin(true)
      setUserInfo(response.data.data)
    }).catch((e: AxiosError) => {
      setLoaded(true)
      setLogin(false)
    })
  })
  return {
    isLoaded, isLoggedIn, userInfo,
  }
}

export default useAuth
