import { Suspense } from 'react';
import { hot } from 'react-hot-loader';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';



const { store, persistor } = configureStore(window?.__PRELOADED_STATE__);
delete window?.__PRELOADED_STATE__;

const Providers = ({ children }: any) => {
  return (
    <Suspense fallback={null}>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            {children}
          </I18nextProvider>
        </PersistGate>
      </StoreProvider>
    </Suspense>
  );
}

export default hot(module)(Providers);
