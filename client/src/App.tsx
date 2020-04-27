import React from 'react';
import Routes from 'components/Routes';
import Global from 'styles/global';
import { Provider } from 'react-redux';
import { store } from 'modules';
import { CookiesProvider } from 'react-cookie';

const App: React.FC = () => (
  <CookiesProvider>
    <Provider store={store}>
      <Global />
      <Routes />
    </Provider>
  </CookiesProvider>
);

export default App;
