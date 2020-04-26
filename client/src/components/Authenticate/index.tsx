import React, { FC, useEffect, useState } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { render } from '@testing-library/react';
interface Props {
  components: Component;
}
const authenticateRequire: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <div>{}</div>;
};
export default authenticateRequire;
