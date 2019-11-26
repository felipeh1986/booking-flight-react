/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectFlightsOneWay = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.flights.flightsOneWay,
  );

const makeSelectFlightsReturn = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.flights.flightsReturn,
  );

  const makeSelectReservations = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.reservations,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectFlightsOneWay,
  makeSelectFlightsReturn,
  makeSelectReservations
};
