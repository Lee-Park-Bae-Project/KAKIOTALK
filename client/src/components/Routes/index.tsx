import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from 'pages/login';
import MainContainer from 'containers/MainContainer';
import ChatRoom from 'pages/chatroom';
import { configs } from 'common/constants';
const Routes: React.FC = () => (
  <Router>
    <Route exact path="/" component={MainContainer} />
    <Route path="/login" component={Login} />
    <Route path="/chat" component={ChatRoom} />
  </Router>
);

export default Routes;
