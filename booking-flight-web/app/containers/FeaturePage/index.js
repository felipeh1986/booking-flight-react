/*
 * FeaturePage
 *
 * List all the features
 */
import React,{ memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeSelectLoading, makeSelectError, makeSelectReservations} from 'containers/App/selectors';
import { makeSelectDocument, } from './selectors';
import { changeDocument } from './actions';
import { getReservations } from '../App/actions';

import reducer from './reducer';
import saga from './saga';

import H2 from 'components/H1';
import messages from './messages';
import Form from './Form';

import ReservationList from 'components/ReservationList';

const key = 'reservation';

export function FeaturePage({
  document,
  onSubmitForm,
  onChangeDocument,
  reservations,
  loading,
  error,
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const reservationListProps = {
    loading,
    error,
    reservations,
  };

  return (
    <div>
      <Helmet>
        <title>Consultas de reservas</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H2>
        Consultar Reservaciones
      </H2>
      <br />

      <Form onSubmit={onSubmitForm}>
            <div>
              <label htmlFor="Número de cédula" >
                <b><FormattedMessage {...messages.documentMessage} /></b>
                <input
                  id="document"
                  type="text"
                  value={document}
                  onChange={onChangeDocument}
                />
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="Buscar vuelos">
                <input type="submit" value="Buscar reservas"
                />
              </label>
            </div>
      </Form>
      <ReservationList {...reservationListProps} />
  </div>
  );
}

FeaturePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  document: PropTypes.string,
  onChangeDocument: PropTypes.func,
  reservations: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  document: makeSelectDocument(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  reservations: makeSelectReservations(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeDocument: evt => dispatch(changeDocument(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(getReservations());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps,);

export default compose(withConnect,memo,)(FeaturePage);
