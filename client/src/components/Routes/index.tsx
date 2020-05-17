import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from 'pages/login';
import MainContainer from 'containers/MainContainer';
import ChatRoom from 'pages/chatroom';
import {url} from 'common/constants'

const Routes: React.FC = () => (
  <Router>
    <Route exact path={url.main} component={MainContainer} />
    <Route path={url.login} component={Login} />
    <Route path={url.chatRoom}component={ChatRoom} />
  </Router>
);

export default Routes;
