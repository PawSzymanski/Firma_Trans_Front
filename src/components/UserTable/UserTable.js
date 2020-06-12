import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getUsers} from "../../reducers";
import {connect} from "react-redux";

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

function UserTable(props) {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Imie</StyledTableCell>
                        <StyledTableCell align="center">Nazwisko</StyledTableCell>
                        <StyledTableCell align="center">Login</StyledTableCell>
                        <StyledTableCell align="center">Hasło</StyledTableCell>
                        <StyledTableCell align="center">E-mail</StyledTableCell>
                        <StyledTableCell align="center">Data urodzenia</StyledTableCell>
                        <StyledTableCell align="center">Telefon</StyledTableCell>
                        <StyledTableCell align="center">Rola</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((users,index)  => (
                        <StyledTableRow key={index} onClick={props.handleFn(users.id,users.name,users.surname,users.login,users.password,users.email,users.birthday,users.phone,users.role.role)}>
                            <StyledTableCell component="th" scope="row">
                                {users.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{users.name}</StyledTableCell>
                            <StyledTableCell align="center">{users.surname}</StyledTableCell>
                            <StyledTableCell align="center">{users.login}</StyledTableCell>
                            <StyledTableCell align="center">{users.password}</StyledTableCell>
                            <StyledTableCell align="center">{users.email}</StyledTableCell>
                            <StyledTableCell align="center">{users.birthday}</StyledTableCell>
                            <StyledTableCell align="center">{users.phone}</StyledTableCell>
                            <StyledTableCell align="center">{users.role.role}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state=>({
    users: getUsers(state),
})

export default connect(mapStateToProps)(UserTable);

