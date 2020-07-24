import { useEffect, useState } from 'react'
import * as request from 'common/request'
import { url } from 'common/constants'

import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'modules'

const useAuth = () => {
  const history = useHistory()
  const { isLoggedIn } = useSelector((state: RootState) => state.login)

  useEffect(() => {
    if (!isLoggedIn) {
      history.push(url.login)
    }
  }, [])
  return { isLoggedIn }
}

export default useAuth
