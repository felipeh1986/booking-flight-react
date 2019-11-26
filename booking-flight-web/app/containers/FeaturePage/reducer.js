import produce from 'immer';
import { CHANGE_DOCUMENT, } from './constants';

// The initial state of the App
export const initialState = {
  document: '',
};

/* eslint-disable default-case, no-param-reassign */
const reservationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_DOCUMENT:
        draft.document = action.document;
        break;
    }
  });

export default reservationReducer;
