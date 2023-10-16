import { fork, spawn } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';

import navWatch from '@/modules/nav/sagas';

export default function* rootSaga() {
  yield fork(routinePromiseWatcherSaga);
  yield spawn(navWatch);
}
