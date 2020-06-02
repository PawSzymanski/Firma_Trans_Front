import React, {useState} from 'react';
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
import {toggleDialog} from "../../actions";
import axios from "axios";
import {useAlert} from "react-alert";



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
    const alert = useAlert()

    let [id_s] = useState('');
    let [login_s] = useState('');

    const handleClick = (id,userLogin) => {
        return (event) => {
            props.toggleDialog();
            id_s=id;
            login_s=userLogin;
        }

    }

    const setReservation = () => {
            axios.post('/api/reservation/make',
                {
                    "roadId": id_s,
                    "clientName": login_s
                })
                .then(()=>alert.success(<div style={{ textTransform: 'lowercase', textAlign:'center' }}>rezerwacja dokonana</div>))
                .catch((err)=>console.log(err));
    }


    return (
        <TableContainer component={Paper}>
            <DialogUI setReservation={setReservation}/>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Data</StyledTableCell>
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
                                        onClick={handleClick(road.roadPart.id,props.userLogin)}>
                            <StyledTableCell align="center">{road.roadDate}</StyledTableCell>
                            <StyledTableCell align="center">{road.roadPart.startStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{road.roadPart.startStop.location}</StyledTableCell>
                            <StyledTableCell align="center">{road.roadPart.startStop.coordinates}</StyledTableCell>
                            <StyledTableCell align="center">{road.roadPart.endStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{road.roadPart.endStop.location}</StyledTableCell>
                            <StyledTableCell align="center">{road.roadPart.endStop.coordinates}</StyledTableCell>
                            <StyledTableCell align="center">{road.roadPart.price} zł</StyledTableCell>
                            <StyledTableCell align="center">{road.roadPart.distance} km</StyledTableCell>
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
