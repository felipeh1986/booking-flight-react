/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  reservation: {
    id: `${scope}.reservation`,
    defaultMessage: 'Reservar',
  },
  queries: {
    id: `${scope}.queries`,
    defaultMessage: 'Consultas',
  },
});
