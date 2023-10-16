import { createAction } from 'redux-actions';
import { NAV_SET_ERROR, NAV_SET_URL_PARAMS } from './types';

export const setUrlParams = createAction(NAV_SET_URL_PARAMS);
export const setNavError = createAction(NAV_SET_ERROR);
