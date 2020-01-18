import React from 'react';
import Routes from 'components/Routes';
import Global from 'styles/global';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'modules';

const store = createStore(rootReducer);

const App: React.FC = () => (
  <Provider store={store}>
    <Global />
    <Routes />
  </Provider>
);

export default App;
