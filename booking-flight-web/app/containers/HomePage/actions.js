/*
 * Home Actions
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

import { CHANGE_USERNAME, 
  CHANGE_SOURCE, 
  CHANGE_DESTINY, 
  CHANGE_INIT_DATE, 
  CHANGE_END_DATE } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function changeSource(source) {
  return {
    type: CHANGE_SOURCE,
    source,
  };
}

export function changeDestiny(destiny) {
  return {
    type: CHANGE_DESTINY,
    destiny,
  };
}

export function changeInitDate(initDate) {
  return {
    type: CHANGE_INIT_DATE,
    initDate,
  };
}

export function changeEndDate(endDate) {
  return {
    type: CHANGE_END_DATE,
    endDate,
  };
}
