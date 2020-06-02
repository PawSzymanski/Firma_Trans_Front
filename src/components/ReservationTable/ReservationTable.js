import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux";
import {setReservation} from "../../reducers";


const StyledTableCell = withStyles((theme) => ({

    head: {
        backgroundColor: '#19615b',
        color: theme.palette.common.white,
        fontWeight: '600',
    },


    body: {
        fontSize: 14,

    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,

    },
});

function ReservationTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Data</StyledTableCell>
                        <StyledTableCell align="center">Klient</StyledTableCell>
                        <StyledTableCell align="center">Startowy przystanek</StyledTableCell>
                        <StyledTableCell align="center">Startowy współrzędne</StyledTableCell>
                        <StyledTableCell align="center">Końcowy przystanek</StyledTableCell>
                        <StyledTableCell align="center">Końcowy współrzędne</StyledTableCell>
                        <StyledTableCell align="center">Dystans</StyledTableCell>
                        <StyledTableCell align="center">Cena</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.reservation.map((reservation,index) => (
                        <StyledTableRow key={index} >
                            <StyledTableCell align="center">{reservation.road.roadDate}</StyledTableCell>
                            <StyledTableCell align="center">{reservation.clientName}</StyledTableCell>
                            <StyledTableCell align="center">{reservation.road.roadPart.startStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{reservation.road.roadPart.startStop.coordinates}</StyledTableCell>
                            <StyledTableCell align="center">{reservation.road.roadPart.endStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{reservation.road.roadPart.endStop.coordinates}</StyledTableCell>
                            <StyledTableCell align="center">{reservation.road.roadPart.distance} km</StyledTableCell>
                            <StyledTableCell align="center">{reservation.road.roadPart.price} zła</StyledTableCell>
                            <StyledTableCell align="center">{reservation.reservationStatus}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state=>({
    reservation: setReservation(state),
})

export default connect(mapStateToProps)(ReservationTable);
