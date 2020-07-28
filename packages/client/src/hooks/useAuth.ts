import {
  useEffect, useState,
} from 'react'
import * as request from 'common/request'
import { url } from 'common/constants'

import { useHistory } from 'react-router-dom'

const useAuth = () => {
  const history = useHistory()
  const [isLoggedIn, setLogin] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    uuid: '',
    statusMessage: '',
    imageUrl: '',
  })
  useEffect(() => {
    (async () => {
      request.getUserInfo().then((res) => {
        setLogin(true)
        const {
          name, email, uuid, statusMessage, imageUrl,
        } = res.data.data
        setUserInfo({
          name, email, uuid, statusMessage, imageUrl,
        })
      })
        .catch(() => {
          history.push(url.login)
        })
    })()
  }, [])
  return {
    isLoggedIn, userInfo,
  }
}

export default useAuth
