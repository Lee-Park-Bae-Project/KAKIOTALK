import React from 'react'
import Routes from 'components/Routes'
import Global from 'styles/global'
import { Provider } from 'react-redux'
import { Store } from 'modules'
import { CookiesProvider } from 'react-cookie'
import { PersistGate } from 'redux-persist/integration/react'

const App: React.FC = () => (
  <CookiesProvider>
    <Provider store={Store.store}>
      <PersistGate persistor={Store.persistor}>
      <Global />
      <Routes />
      </PersistGate>
    </Provider>
  </CookiesProvider>
)

export default App
