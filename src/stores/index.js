import {applyMiddleware, createStore} from 'redux';
import rootReducer from 'stores/root-reducer';
import * as reduxStorage from 'redux-storage';
import createSagaMiddleware from 'redux-saga';
import sagas from 'stores/root-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'nav', 'settings', 'common', 'more'],
  blackList: ['form']
};

const reducer = reduxStorage.reducer(rootReducer);

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();
const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav
);
const middleware = [sagaMiddleware, navigationMiddleware];

export const store: any = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);

sagaMiddleware.run(sagas);
