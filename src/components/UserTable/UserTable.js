import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[],
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers=()=>{
        axios.get(`/api/clients/all`)
            .then(response => this.setState({ users: response.data }))
    }

    render() {
        return (

            <TableContainer  component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Imie</TableCell>
                            <TableCell align="right">Nazwisko</TableCell>
                            <TableCell align="right">Login</TableCell>
                            <TableCell align="right">Hasło</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right">Data urodzenia</TableCell>
                            <TableCell align="right">Telefon</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map((users,index) => (
                            <TableRow key={index}>
                                <TableCell  align="right">{users.id}</TableCell>
                                <TableCell  align="right">{users.name}</TableCell>
                                <TableCell align="right">{users.surname}</TableCell>
                                <TableCell align="right">{users.login}</TableCell>
                                <TableCell align="right">{users.password}</TableCell>
                                <TableCell align="right">{users.email}</TableCell>
                                <TableCell align="right">{users.birthday}</TableCell>
                                <TableCell align="right">{users.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default Users;



