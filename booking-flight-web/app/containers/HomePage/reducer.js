/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME, CHANGE_SOURCE, CHANGE_DESTINY, CHANGE_INIT_DATE, CHANGE_END_DATE } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  source: '',
  destiny: '',
  initDate: '',
  endDate: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case CHANGE_SOURCE:
        draft.source = action.source;
        break;
      case CHANGE_DESTINY:
        draft.destiny = action.destiny;
        break;
      case CHANGE_INIT_DATE:
        draft.initDate = action.initDate;
        break;
      case CHANGE_END_DATE:
        draft.endDate = action.endDate;
        break;
    }
  });

export default homeReducer;
