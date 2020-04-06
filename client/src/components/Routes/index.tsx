import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Login from 'pages/login';
import MainContainer from 'containers/MainContainer';

const Routes: React.FC = () => (
    <Router>
      <Route
        exact
        path='/'
        component={MainContainer}
      />
      <Route
        path="/login"
        component={Login}
      />
    </Router>
);

export default Routes;
