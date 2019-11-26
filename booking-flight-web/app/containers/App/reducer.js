/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { GET_FLIGHTS_AVAILABLE, 
  GET_FLIGHTS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_RESERVATIONS,
  LOAD_RESERVATIONS_SUCCESS,
  LOAD_RESERVATIONS_ERROR, } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  flights: {
    flightsOneWay: false,
    flightsReturn: false,
  },
  userData: {
    repositories: false,
  },
  reservations: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_FLIGHTS_AVAILABLE:
        draft.loading = true;
        draft.error = false;
        break;
      case GET_FLIGHTS_SUCCESS:
        draft.flights.flightsOneWay = action.flights.detail.flightsOneWay;
        draft.flights.flightsReturn = action.flights.detail.flightsReturn;
        draft.loading = false;
        break;
      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
        
      //CASES FOR RESERVATIONS
      case LOAD_RESERVATIONS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_RESERVATIONS_SUCCESS:
        draft.reservations = action.reservations.detail;
        draft.loading = false;
        break;
      case LOAD_RESERVATIONS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

  
export default appReducer;
