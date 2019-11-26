/**
 * Reservations selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectReservation = state => state.reservation || initialState;

const makeSelectDocument = () =>
  createSelector(
    selectReservation,
    reservationState => reservationState.document,
  );

export { makeSelectDocument, };
