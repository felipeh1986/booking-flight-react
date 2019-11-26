/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_FLIGHTS_AVAILABLE } from 'containers/App/constants';
import { flightsLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectSource, makeSelectDestiny, makeSelectInitDate,makeSelectEndDate } from 'containers/HomePage/selectors';

import axios from 'axios';
import constants from 'jest-haste-map/build/constants';

/**
 * Github repos request/response handler
 */
export function* getFlights() {

  const source = yield select(makeSelectSource());
  const destiny = yield select(makeSelectDestiny());
  const initDate = yield select(makeSelectInitDate());
  const endDate = yield select(makeSelectEndDate());

  const requestURL = `http://localhost:9000/booking/flight/getFlights`;

  const requestService = {
    "initDate": initDate,
    "endDate": endDate,
    "source": source,
    "destiny": destiny,
    "oneWay": false
  };

  try {
     const apiCall = () =>  {
       return axios.post(requestURL, requestService)
        .then(res => {
          return res.data;
        });
      };

      let response = yield call(apiCall);

      yield put(flightsLoaded(response));
  } catch (err) {
    console.log(err);
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getFlightsAvailable() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_FLIGHTS_AVAILABLE, getFlights);
}
