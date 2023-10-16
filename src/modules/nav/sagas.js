import { LOCATION_CHANGE, push, replace } from 'redux-first-history';
import { call, cancel, select, put, takeEvery } from 'redux-saga/effects';
import { matchRoutes } from 'react-router-dom';
import queryString from 'query-string';

import rootRouter from '@/config/router';
import { isAuthLoggedIn } from '@/modules/auth/selectors';
import { setUrlParams, setNavError } from './actions';
import { getNavPathname, getNavParams } from './selectors';

export function* checkAuth(matches) {
  const isLoggedIn = yield select(isAuthLoggedIn);
  const isPrivated = matches.some((match) => match.route.isPrivated);

  if (isPrivated && !isLoggedIn) {
    yield put(push('/'));
    yield cancel();
  }
}

export function* runActions(matches) {
  const params = yield select(getNavParams);

  for (const match of matches) {
    const { route } = match;
    if (route.action && route.action.length > 0) {
      yield put(match.action({ ...params, ...route.params }));
    }
  }
}

export function* locationChangeSaga() {
  try {
    const pathname = yield select(getNavPathname);
    const matches = yield call(matchRoutes, rootRouter, pathname);

    if (!matches || matches.length === 0) {
      yield cancel();
    }

    yield call(checkAuth, matches);
    yield call(runActions, matches);
  } catch (error) {
    console.error('error', error);
  }
}

export function* setUrlParamsSaga({ payload }) {
  try {
    const pathname = yield select(getNavPathname);
    const params = yield select(getNavParams);
    const query = { ...params, ...payload };

    const url = queryString.stringifyUrl(
      { url: pathname, query },
      { skipNull: true, skipEmptyString: true },
    );
    yield put(replace(url));
  } catch (error) {
    yield put(setNavError(error));
  }
}

export default function* navWatch() {
  yield takeEvery(LOCATION_CHANGE, locationChangeSaga);
  yield takeEvery(setUrlParams.toString(), setUrlParamsSaga);
}
