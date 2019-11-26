/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_RESERVATIONS } from 'containers/App/constants';

import request from 'utils/request';
import { makeSelectDocument } from 'containers/FeaturePage/selectors';
import { reservationsLoaded, reservationLoadingError } from 'containers/App/actions';

/**
 * Github repos request/response handler
 */
export function* getReservations() {

  const document = yield select(makeSelectDocument());

  const requestURL = `http://localhost:9000/booking/flight/getReservations/${document}`;

  try {
    // Call our request helper (see 'utils/request')
    const reservations = yield call(request, requestURL);
    yield put(reservationsLoaded(reservations));
  } catch (err) {
    console.log("ERROR ::::::::::: " +err);
    yield put(reservationLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getReservationsStored() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_RESERVATIONS, getReservations);
}
