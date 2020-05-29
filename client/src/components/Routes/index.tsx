import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from 'pages/login';
import MainContainer from 'containers/MainContainer';
import { ChatRoomContainer } from 'containers';
import { url } from 'common/constants';

const Routes: React.FC = () => (
  <Router>
    <Route exact path={url.main} component={MainContainer} />
    <Route path={url.login} component={Login} />
    <Route path={`${url.room}/:roomUuid`} component={ChatRoomContainer} />
  </Router>
);

export default Routes;
