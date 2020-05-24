import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getRoad} from "../../reducers";
import {connect} from "react-redux";
import DialogUI from "../Dialog/DialogUI";
import axios from "axios";
import {toggleDialog} from "../../actions";



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
        '&:hover':{
            backgroundColor:'#7AAFB1',
            cursor:'pointer',
        },
        '&:active':{
            backgroundColor:'#C3DBE3',
        }
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,

    },
});


function RoadTable(props) {
    const classes = useStyles();

    const handleClick = (id,userLogin) => {
        return (event) => {
            console.log(`You clicked  id ${id} ${userLogin}`);
            props.toggleDialog();

            axios.post('/api/reservation/make',
                {
                   "roadId": id,
                   "clientName": userLogin
                })
                .then(()=>console.log("Success"))
                .catch((err)=>console.log(err));
        }

    }


    return (
        <TableContainer component={Paper}>
            <DialogUI/>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Startowy przystanek</StyledTableCell>
                        <StyledTableCell align="center">Lokalizacja</StyledTableCell>
                        <StyledTableCell align="center">Współrzędne</StyledTableCell>
                        <StyledTableCell align="center">Końcowy przystanek</StyledTableCell>
                        <StyledTableCell align="center">Lokalizacja</StyledTableCell>
                        <StyledTableCell align="center">Współrzędne</StyledTableCell>
                        <StyledTableCell align="center">Cena</StyledTableCell>
                        <StyledTableCell align="center">Odległość</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.road.map((road,index) => (
                        <StyledTableRow key={index}
                                        onClick={handleClick(road.id,props.userLogin)}>
                            <StyledTableCell align="center">{road.startStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{road.startStop.location}</StyledTableCell>
                            <StyledTableCell align="center">{road.startStop.coordinates}</StyledTableCell>
                            <StyledTableCell align="center">{road.endStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{road.endStop.location}</StyledTableCell>
                            <StyledTableCell align="center">{road.endStop.coordinates}</StyledTableCell>
                            <StyledTableCell align="center">{road.price}</StyledTableCell>
                            <StyledTableCell align="center">{road.distance} km</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapDispatchToProps=dispatch=>({
    toggleDialog:()=>dispatch(toggleDialog()),

});

const mapStateToProps = state=>({
    road: getRoad(state),
    userLogin: state.userLogin,
})

export default connect(mapStateToProps,mapDispatchToProps)(RoadTable);
