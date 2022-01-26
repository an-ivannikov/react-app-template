import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import createEnhancers, { sagaMiddleware } from './enhancers';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';



const persistConfig = {
  key: 'store',
  storage: storage,
  whitelist: [],
  stateReconciler: autoMergeLevel1,
};


const initialState = {};

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    persistReducer(persistConfig, createRootReducer()),
    Object.assign({}, initialState, preloadedState),
    createEnhancers(),
  );
  const persistor = persistStore(store);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const createNewRootReducer = require('./rootReducer');
      store.replaceReducer(persistReducer(persistConfig, createNewRootReducer()));
    });
  }

  sagaMiddleware.run(rootSaga, { /*api, options,*/ });

  return { store, persistor };
}

export default configureStore;
