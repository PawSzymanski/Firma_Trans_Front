import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getConnection} from "../../reducers";
import {connect} from "react-redux";
import DialogConn from "../Dialog/DialogConn";
import {toggleDialog, } from "../../actions";

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
    button:{
        margin:0,
        borderRadius:'20px',
        backgroundColor:'#19615B',
        color:"white",

        '&:active':{
            backgroundColor:'#548D96',
        }
    }
});

function AllConnectionTable(props) {
    const classes = useStyles();

    let [id_c,startStop_c,endStop_c,distance_c] = useState([]);

    const handleClick = (id,startStop,endStop,distance) => {
            id_c=id;
            startStop_c=startStop;
            endStop_c=endStop;
            distance_c=distance;
    }

    const getConn = () =>{
        return [id_c,startStop_c,endStop_c,distance_c];
    }

    return (
        <TableContainer component={Paper}>
            <DialogConn getConn={getConn}/>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Startowy przystanek</StyledTableCell>
                        <StyledTableCell align="center">Końcowy przystanek</StyledTableCell>
                        <StyledTableCell align="center">Odległość</StyledTableCell>
                        <StyledTableCell align="center">Przydział</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.allConnection.map((allConn,index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center">{allConn.id}</StyledTableCell>
                            <StyledTableCell align="center">{allConn.startStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{allConn.endStop.name}</StyledTableCell>
                            <StyledTableCell align="center">{allConn.distance} km</StyledTableCell>
                            <StyledTableCell align="center"><button onClick={() => {
                                props.toggleDialog();
                                handleClick(allConn.id,allConn.startStop.name,allConn.endStop.name,allConn.distance);
                            }} className={classes.button}>Przydziel</button></StyledTableCell>
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
    allConnection: getConnection(state),

})

export default connect(mapStateToProps,mapDispatchToProps)(AllConnectionTable);
