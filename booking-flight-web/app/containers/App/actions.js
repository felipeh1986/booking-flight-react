/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_AVAILABLE,
  LOAD_REPOS_ERROR, 
  LOAD_RESERVATIONS,
  LOAD_RESERVATIONS_SUCCESS,
  LOAD_RESERVATIONS_ERROR, } from './constants';


export function getFlightsAvailable() {
  return {
    type: GET_FLIGHTS_AVAILABLE,
  };
}


export function flightsLoaded(flights) {
  return {
    type: GET_FLIGHTS_SUCCESS,
    flights,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}


export function getReservations() {
  return {
    type: LOAD_RESERVATIONS,
  };
}

export function reservationsLoaded(reservations) {
  return {
    type: LOAD_RESERVATIONS_SUCCESS,
    reservations,
  };
}

export function reservationLoadingError(error) {
  return {
    type: LOAD_RESERVATIONS_ERROR,
    error,
  };
}

