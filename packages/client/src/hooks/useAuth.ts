import { useEffect } from 'react'
import * as request from 'common/request'
import { url } from 'common/constants'

import { useHistory } from 'react-router-dom'

const useAuth = () => {
  const history = useHistory()
  useEffect(() => {
    (async () => {
      request.getUserInfo().catch(() => {
        history.push(url.login)
      })
    })()
  }, [])
}

export default useAuth
