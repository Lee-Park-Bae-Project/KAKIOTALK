import React from 'react'
import {
  Redirect, Route, HashRouter as Router, Switch,
} from 'react-router-dom'
import Login from 'pages/login'
import MainContainer from 'containers/MainContainer'
import { ChatRoomContainer } from 'containers'
import { url } from 'common/constants'

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path={url.main} component={MainContainer} />
      <Route path={url.login} component={Login} />
      <Route path={`${url.room}/:roomUuid`} component={ChatRoomContainer} />
      <Redirect from='/' to='/main/friend-list'/>
    </Switch>
  </Router>
)

export default Routes
