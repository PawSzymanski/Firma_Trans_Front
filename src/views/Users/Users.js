import React, { Component } from 'react';
import styles from './Users.module.scss'
import UserTable from '../../components/UserTable/UserTable'
import RegisterForm from "../../components/LoginRegisterForm/RegisterForm";

class Users extends Component {
     constructor(props){
     super(props);
     this.state = {

     };
     }

    render() {
        return (
            <div className={styles.wrapper}>

                <div className={styles.tableClass}>
                    <UserTable/>
                </div>
                <div className={styles.addUserClass}>
                <RegisterForm/>
                </div>
            </div>
        );
    }
}

export default Users;



