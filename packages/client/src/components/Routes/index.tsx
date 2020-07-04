import React from 'react'
import {
  Redirect, Route, HashRouter as Router, Switch,
} from 'react-router-dom'
import * as Pages from 'pages'
import MainContainer from 'containers/MainContainer'
import { url } from 'common/constants'

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path={url.main} component={MainContainer} />
      <Route path={url.login} component={Pages.Login} />
      <Route path={`${url.room}/:roomUuid`} component={Pages.ChatRoom} />
      <Redirect from='/' to='/main/friend-list'/>
    </Switch>
  </Router>
)

export default Routes
