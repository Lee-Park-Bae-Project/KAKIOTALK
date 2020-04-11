import React from 'react';
import Routes from 'components/Routes';
import Global from 'styles/global';
import { Provider } from 'react-redux';
import { store } from 'modules';

const App: React.FC = () => (
  <Provider store={store}>
    <Global />
    <Routes />
  </Provider>
);

export default App;
