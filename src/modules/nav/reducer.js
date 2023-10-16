import queryString from 'query-string';
import { LOCATION_CHANGE } from 'redux-first-history';

import { setNavError } from './actions';

const initalState = {
  pathname: '/',
  params: {},
  prevParams: {},
  error: null,
};

const mapReducer = {
  [LOCATION_CHANGE]: (state, action) => {
    state.pathname = action.payload.location.pathname;
    state.prevParams = state.filters;
    state.params = queryString.parse(action.payload.location.search, {
      skipNull: true,
      skipEmptyString: true,
    });
    return state;
  },
  [setNavError.toString()]: (state, action) => {
    state.error = action.payload;
    return state;
  },
};

const reducer = (state = initalState, action) => {
  return mapReducer[action.type]
    ? mapReducer[action.type](state, action)
    : state;
};

export default reducer;
