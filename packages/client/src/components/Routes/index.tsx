import React from 'react'
import {
  Redirect, Route, HashRouter as Router,
} from 'react-router-dom'
import Login from 'pages/login'
import MainContainer from 'containers/MainContainer'
import { ChatRoomContainer } from 'containers'
import { url } from 'common/constants'

const Routes: React.FC = () => (
  <Router>
    <Route path={url.main.friendList} component={MainContainer} />
    <Route path={url.main.chatList} component={MainContainer} />
    <Route path={url.login} component={Login} />
    <Route path={`${url.room}/:roomUuid`} component={ChatRoomContainer} />
    <Redirect from='/' to={url.main.friendList}/>
  </Router>
)

export default Routes
