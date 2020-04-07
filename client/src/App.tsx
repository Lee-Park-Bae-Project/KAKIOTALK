import React from 'react';
import Routes from 'components/Routes';
import Global from 'styles/global';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

const App: React.FC = () => (
  <Provider store={store}>
    <Global />
    <Routes />
  </Provider>
);

export default App;
