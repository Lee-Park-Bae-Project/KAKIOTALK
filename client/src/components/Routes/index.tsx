import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from 'pages/login';
import MainContainer from 'containers/MainContainer';
import ChatRoom from 'pages/chatroom';
import { configs } from 'common/constants';
const Routes: React.FC = () => (
  <Router basename={configs.PUBLIC_URL}>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={MainContainer} />
    <Route path="/chat" component={ChatRoom} />
  </Router>
);

export default Routes;
