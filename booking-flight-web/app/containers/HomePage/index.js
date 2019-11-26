/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError, makeSelectFlightsOneWay, makeSelectFlightsReturn} from 'containers/App/selectors';
import H2 from 'components/H2';
import FlightList from 'components/FlightList';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Section from './Section';
import messages from './messages';
import { getFlightsAvailable } from '../App/actions';
import { changeUsername, changeSource, changeInitDate, changeDestiny, changeEndDate } from './actions';
import { makeSelectUsername, 
  makeSelectSource, 
  makeSelectDestiny, 
  makeSelectInitDate,
  makeSelectEndDate } from './selectors';
import reducer from './reducer';
import saga from './saga';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const key = 'home';

export function HomePage({
  username,
  source,
  destiny,
  initDate,
  endDate,
  loading,
  error,
  onSubmitForm,
  onChangeSource,
  onChangeDestiny,
  onChangeInitDate,
  onChangeEndDate,
  flightsOneWay,
  flightsReturn,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const flightOneWayListProps = {
    loading,
    error,
    flightsOneWay,
  };

  const flightReturnListProps = {
    loading,
    error,
    flightsReturn,
  };

  return (
    <article>
      <Helmet>
        <title>Booking Flight</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startReservationHeader} />
          </H2>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.reservationHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <div>
              <label htmlFor="source" >
                <FormattedMessage {...messages.sourceMessage} />
                <input
                  id="source"
                  type="text"
                  placeholder="Medellin"
                  value={source}
                  onChange={onChangeSource}
                />
              </label>
              <label htmlFor="destiny">
                <FormattedMessage {...messages.destinyMessage} />
                <input
                  id="destiny"
                  type="text"
                  placeholder="Bogota"
                  value={destiny}
                  onChange={onChangeDestiny}
                />
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="initDate">
                <FormattedMessage {...messages.initDateMessage} />
                <DatePicker id="initDate"  
                  selected={initDate} 
                  onSelect={onChangeInitDate}/>
              </label>
              <label htmlFor="endDate">
                <FormattedMessage {...messages.endDateMessage} />
                <DatePicker id="endDate" 
                  selected={endDate} 
                  onSelect={onChangeEndDate}/>
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="Buscar vuelos">
                <input type="submit" value="Buscar vuelos"
                />
              </label>
            </div>
          </Form>
          <FlightList {...flightOneWayListProps} />
          <br />
          <FlightList {...flightReturnListProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  flightsOneWay: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  flightsReturn: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  destiny: PropTypes.string,
  initDate: PropTypes.any,
  endDate: PropTypes.any,
  onChangeUsername: PropTypes.func,
  onChangeSource: PropTypes.func,
  onChangeDestiny: PropTypes.func,
  onChangeInitDate: PropTypes.func,
  onChangeEndDate: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  source: makeSelectSource(),
  destiny: makeSelectDestiny(),
  initDate: makeSelectInitDate(),
  endDate: makeSelectEndDate(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  flightsOneWay: makeSelectFlightsOneWay(),
  flightsReturn: makeSelectFlightsReturn(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangeSource: evt => dispatch(changeSource(evt.target.value)),
    onChangeDestiny: evt => dispatch(changeDestiny(evt.target.value)),
    onChangeInitDate: date => dispatch(changeInitDate(date)),
    onChangeEndDate: date => dispatch(changeEndDate(date)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(getFlightsAvailable());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps,);

export default compose(
  withConnect,
  memo,
)(HomePage);
