import * as React from 'react'
import {
  useDispatch, useSelector,
} from 'react-redux'
import Main from 'pages/main'
import { RootState } from 'modules'
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
  const roomState = useSelector((state: RootState) => state.room)

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
    <Main
      roomState={roomState}
    ></Main>
  )
}

export default withAuth(MainContainer)
