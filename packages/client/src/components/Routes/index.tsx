import React from 'react'
import {
  Redirect, Route, HashRouter as Router, Switch,
} from 'react-router-dom'
import * as Pages from 'pages'
import { url } from 'common/constants'

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path={url.main.default} component={Pages.Main} />
      <Route path={url.login} component={Pages.Login} />
      <Route path={`${url.room}/:roomUuid`} component={Pages.ChatRoom} />
      <Redirect from='/' to={url.main.friendList}/>
    </Switch>
  </Router>
)

export default Routes
