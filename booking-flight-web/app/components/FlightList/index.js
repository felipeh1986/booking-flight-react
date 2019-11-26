import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import H3 from 'components/H2';
import CenteredSection from './CenteredSection';
import moment from 'moment';

const StyledTableCellDark = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 900,
  },
}));

function FlightList({ loading, error, flightsOneWay, flightsReturn }) {

  const classes = useStyles();

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (flightsOneWay !== undefined && flightsOneWay !== false) {
    return (
      <div className={classes.root}>
        <CenteredSection>
          <H3>
            Vuelos de Ida
          </H3>
        </CenteredSection>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCellDark><b>Vuelo</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Origen</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Destino</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Salida</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Llegada</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Precio</b></StyledTableCellDark>
              </TableRow>
            </TableHead>
            <TableBody>
            {flightsOneWay.map(item => (
                <TableRow key={item.code}>
                  <TableCell component="th" scope="row">{item.code}</TableCell>
                  <TableCell align="right">{item.source}</TableCell>
                  <TableCell align="right">{item.destiny}</TableCell>
                  <TableCell align="right">{moment(item.initDate).format('YYYY-MM-DD HH:mm')}</TableCell>
                  <TableCell align="right">{moment(item.endDate).format('YYYY-MM-DD HH:mm')}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell>
                    <input type="radio" checked={false} />
                  </TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  } 
  
  if (flightsReturn !== undefined && flightsReturn !== false) {
    return (
      <div className={classes.root}>
        <CenteredSection>
          <H3>
            Vuelos de regreso
          </H3>
        </CenteredSection>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCellDark><b>Vuelo</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Origen</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Destino</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Salida</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Llegada</b></StyledTableCellDark>
                <StyledTableCellDark align="right"><b>Precio</b></StyledTableCellDark>
              </TableRow>
            </TableHead>
            <TableBody>
            {flightsReturn.map(item => (
                <TableRow key={item.code}>
                  <TableCell component="th" scope="row">{item.code}</TableCell>
                  <TableCell align="right">{item.source}</TableCell>
                  <TableCell align="right">{item.destiny}</TableCell>
                  <TableCell align="right">{moment(item.initDate).format('YYYY-MM-DD HH:mm')}</TableCell>
                  <TableCell align="right">{moment(item.endDate).format('YYYY-MM-DD HH:mm')}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell>
                    <input type="radio" checked={false} />
                  </TableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  return null;
}

FlightList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  flights: PropTypes.any,
};

export default FlightList;
