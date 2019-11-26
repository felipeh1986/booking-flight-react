/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startReservationHeader: {
    id: `${scope}.start_reservation.header`,
    defaultMessage: 'Reserva tu vuelo con nosotros en instantes',
  },
  startReservationMessage: {
    id: `${scope}.start_reservation.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  reservationHeader: {
    id: `${scope}.reservation.header`,
    defaultMessage: 'Reserva ahora!',
  },
  sourceMessage: {
    id: `${scope}.source.message`,
    defaultMessage: 'Origen: ',
  },
  destinyMessage: {
    id: `${scope}.destiny.message`,
    defaultMessage: 'Destino: ',
  },
  initDateMessage: {
    id: `${scope}.initDate.message`,
    defaultMessage: 'Fecha de ida: ',
  },
  endDateMessage: {
    id: `${scope}.endDate.message`,
    defaultMessage: 'Fecha de regreso: ',
  },
  submitMessage: {
    id: `${scope}.submit.message`,
    defaultMessage: 'Buscar vuelos: ',
  },
});
