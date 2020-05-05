import React, { Component } from 'react';
import styles from './Users.module.scss'
import UserTable from '../../components/UserTable/UserTable'
import RegisterForm from "../../components/RegisterForm/RegisterForm";

class Users extends Component {
     constructor(props){
     super(props);
     this.state = {

     };
     }



    render() {
        return (
            <div className={styles.wrapper}>
                <UserTable />
                <div>
                   <RegisterForm/>
                </div>
            </div>

        );
    }
}

export default Users;



