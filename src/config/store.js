import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { routerMiddleware, createReduxHistory } from './history';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  import.meta.env.DEV &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const middlewares = [sagaMiddleware, routerMiddleware];

const enhancers = [applyMiddleware(...middlewares)];

const store = createStore(rootReducer, composeEnhancers(...enhancers));

sagaMiddleware.run(sagas);

const persistor = persistStore(store);
const history = createReduxHistory(store);

export { history, persistor };
export default store;
