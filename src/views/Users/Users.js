import React, { Component } from 'react';
import styles from './Users.module.scss'
import UserTable from '../../components/UserTable/UserTable'
import RegisterForm from "../../components/LoginRegisterForm/RegisterForm";
import Title from "../../components/Title/Title";


class Users extends Component {
     constructor(props){
     super(props);
     this.state = {

     };
     }

    render() {
        return (
            <div className={styles.wrapper}>
                <UserTable/>
                <div>
                <RegisterForm/>
                </div>
                <Title>Edycja użytkownika</Title>
            </div>
        );
    }
}

export default Users;



