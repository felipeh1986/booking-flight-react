/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectSource = () =>
  createSelector(
    selectHome,
    homeState => homeState.source,
  );

const makeSelectDestiny = () =>
  createSelector(
    selectHome,
    homeState => homeState.destiny,
  );

const makeSelectInitDate = () =>
  createSelector(
    selectHome,
    homeState => homeState.initDate,
  );

const makeSelectEndDate = () =>
  createSelector(
    selectHome,
    homeState => homeState.endDate,
  );

export { selectHome, 
  makeSelectUsername, 
  makeSelectSource, 
  makeSelectDestiny, 
  makeSelectInitDate, 
  makeSelectEndDate };
