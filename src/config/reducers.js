import { combineReducers } from 'redux-immer';
import { persistReducer } from 'redux-persist';
import { produce } from 'immer';

import authReducer from '@/modules/auth/reducer';
import navReducer from '@/modules/nav/reducer';
import { rootPersistConfig } from './persistor';
import { routerReducer } from './history';

const appReducer = combineReducers(produce, {
  auth: authReducer,
  nav: navReducer,
  router: routerReducer,
});

const actions = [];

const rootReducer = (state, action) => {
  if (actions.includes(action.type)) {
    return appReducer({}, action);
  }
  return appReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
