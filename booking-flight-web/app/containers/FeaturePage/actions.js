import { CHANGE_DOCUMENT } from './constants';

export function changeDocument(document) {
  return {
    type: CHANGE_DOCUMENT,
    document,
  };
}
