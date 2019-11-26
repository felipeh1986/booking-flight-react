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

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
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
    minWidth: 850,
  },
}));

function ReservationList({ loading, error, reservations }) {

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

  if (reservations !== undefined && reservations !== false && reservations !== null) {
    return (
      <div className={classes.root}>
        
        <CenteredSection>
          <H3>
            Reservaciones realizadas
          </H3>
        </CenteredSection>
        <Paper className={classes.paper}>
            {reservations.map(item => (
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <StyledTableCellDark><b>Reservación</b></StyledTableCellDark>
                    <StyledTableCellDark align="right"><b>Fecha Reservación</b></StyledTableCellDark>
                    <StyledTableCellDark align="right"><b>Documento</b></StyledTableCellDark>
                    <StyledTableCellDark align="right"><b>Apellidos</b></StyledTableCellDark>
                    <StyledTableCellDark align="right"><b>Nombres</b></StyledTableCellDark>
                    <StyledTableCellDark align="right"><b>Fecha de nacimiento</b></StyledTableCellDark>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={item.code}>
                    <TableCell component="th" scope="row">{item.code}</TableCell>
                    <TableCell align="right">{moment(item.date).format('YYYY-MM-DD HH:mm')}</TableCell>
                    <TableCell align="right">{item.document}</TableCell>
                    <TableCell align="right">{item.lastName}</TableCell>
                    <TableCell align="right">{item.firstName}</TableCell>
                    <TableCell align="right">
                      {moment(item.birthDate).format('YYYY-MM-DD')}
                    </TableCell>
                  </TableRow>
                  
                  <TableRow key={item.id}>
                      <TableCell colSpan={6}>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell><b>Código Vuelo</b></StyledTableCell>
                            <StyledTableCell align="right"><b>Origen</b></StyledTableCell>
                            <StyledTableCell align="right"><b>Destino</b></StyledTableCell>
                            <StyledTableCell align="right"><b>Salida</b></StyledTableCell>
                            <StyledTableCell align="right"><b>Llegada</b></StyledTableCell>
                            <StyledTableCell align="right"><b>Precio</b></StyledTableCell>
                          </TableRow>
                        </TableHead>
                        {item.flights.map( flight =>(
                          <TableRow key={flight.code}>
                            <TableCell component="th" scope="row">{flight.code}</TableCell>
                            <TableCell align="right">{flight.source}</TableCell>
                            <TableCell align="right">{flight.destiny}</TableCell>
                            <TableCell align="right">{moment(flight.initDate).format('YYYY-MM-DD HH:mm')}</TableCell>
                            <TableCell align="right">{moment(flight.endDate).format('YYYY-MM-DD HH:mm')}</TableCell>
                            <TableCell align="right">{flight.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            ))}
        </Paper>
      </div>
    );
  } else {
    return <ListItem item="No hay datos para mostrar!" />
  }
  
 
  return null;
}

ReservationList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  reservations: PropTypes.any,
};

export default ReservationList;
