import React, { Component } from 'react';
import styles from './Register.module.scss'
import {Link} from "react-router-dom";
import ButtonUI from "../../components/Button/ButtonUI";
import RegisterForm from "../../components/RegisterForm/RegisterForm";


class Register extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
     <div className={styles.wrapper}>
         <div className={styles.logo}/>
         <div className={styles.form}>
             <RegisterForm/>
             <ButtonUI component={Link} to="/">Logowanie</ButtonUI>
         </div>
     </div>
        );
    }
}

export default Register;
