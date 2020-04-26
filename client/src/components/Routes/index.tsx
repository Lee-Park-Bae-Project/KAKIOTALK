import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from 'pages/login';
import MainContainer from 'containers/MainContainer';

const Routes: React.FC = () => (
  <Router>
    <Route exact path="/" component={Login} />
    <Route path="/main" component={MainContainer} />
  </Router>
);

export default Routes;
