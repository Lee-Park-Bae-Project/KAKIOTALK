import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Login from 'pages/login';
import Main from 'pages/main';

const Routes: React.FC = () => (
  <Router>
    {/* <Route
        exact
        path='/'
        component={Main}
      /> */}
    <Route
      path="/"
      component={Login}
    />
  </Router>
);

export default Routes;
