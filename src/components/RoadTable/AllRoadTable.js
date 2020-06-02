import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getAllRoad} from "../../reducers";
import {connect} from "react-redux";
import DialogUI from "../Dialog/DialogUI";

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

function AllRoadTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Data</StyledTableCell>
                        <StyledTableCell align="center">Pojazd</StyledTableCell>
                        <StyledTableCell align="center">Kierowca</StyledTableCell>
                        <StyledTableCell align="center">Startowy przystanek</StyledTableCell>
                        <StyledTableCell align="center">Końcowy przystanek</StyledTableCell>
                        <StyledTableCell align="center">Odległość</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.allRoad.map((allRoad,index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center">{allRoad.id}</StyledTableCell>
                            <StyledTableCell align="center">{allRoad.roadDate}</StyledTableCell>
                            <StyledTableCell align="center">{allRoad.vehicle}</StyledTableCell>
                            <StyledTableCell align="center">{allRoad.driver}</StyledTableCell>
                            <StyledTableCell align="center">{allRoad.roadPart.startStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{allRoad.roadPart.endStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{allRoad.roadPart.distance} km</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapDispatchToProps=dispatch=>({

});

const mapStateToProps = state=>({
    allRoad: getAllRoad(state),
})

export default connect(mapStateToProps,mapDispatchToProps)(AllRoadTable);
