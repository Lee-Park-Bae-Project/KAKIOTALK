import * as React from 'react'
import { useDispatch } from 'react-redux'
import Main from 'pages/main'
import { getRoomRequest } from 'modules/room'
import withAuth, { WithAuthProps } from 'hocs/withAuth'
import { afterLogin } from '../socket'

const { useEffect } = React

const MainContainer: React.FC<WithAuthProps> = ({
  name,
  email,
  uuid,
  statusMessage,
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRoomRequest())
  }, [])

  useEffect(() => {
    if (uuid.length > 0) {
      afterLogin({ uuid })
    }
  }, [name,
    email,
    uuid])

  window.history.pushState(null, '', window.location.href)
  return (
    <Main/>
  )
}

export default withAuth(MainContainer)
