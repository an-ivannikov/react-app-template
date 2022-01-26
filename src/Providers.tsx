import { Suspense } from 'react';
import { hot } from 'react-hot-loader';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';



const { store, persistor } = configureStore(window?.__PRELOADED_STATE__);
delete window?.__PRELOADED_STATE__;

const Providers = ({ children }: any) => {
  return (
    <Suspense fallback={null}>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </StoreProvider>
    </Suspense>
  );
}

export default hot(module)(Providers);
