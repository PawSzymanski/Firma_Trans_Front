import React, { Component } from 'react';
import styles from './Modal.module.scss'
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {toggleLogin, toggleModal, toggleRegister} from "../../actions";
import {connect} from "react-redux";
import LoginForm from "../RegisterForm/LoginForm";

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            editUser: {
                id:'',
                name:'',
                surname:'',
                login:'',
                password:'',
                email:'',
                birthday:'',
                phone:'',
            },
        };
    }

    render() {
        return (
            <>
                {
                    this.props.isLoginOpen &&
                    <div className={styles.wrapper}>
                        <div className={styles.form}>
                            <LoginForm />
                            <p onClick={()=>{
                                this.props.toggleModal();
                                this.props.toggleLogin();
                            }}>Zamknij logowanie</p>
                        </div>
                        <div className={styles.logo}/>
                    </div>
                }
                {
                    this.props.isRegisterOpen &&
                    <div className={styles.secondaryWrapper}>
                        <div className={styles.secondaryLogo}/>
                        <div className={styles.secondaryForm}>
                                        <RegisterForm {...this.state}/>
                            <p onClick={()=>{
                                this.props.toggleModal();
                                this.props.toggleRegister();
                            }}>Zamknij rejestrację</p>
                        </div>
                    </div>
                }

            </>
        );
    }
}

const mapDispatchToProps=dispatch=>({
    toggleModal:()=>dispatch( toggleModal()),
    toggleLogin:()=>dispatch( toggleLogin()),
    toggleRegister:()=>dispatch( toggleRegister()),
});

const mapStateToProps = (state) => {
    return {
        isRegisterOpen: state.isRegisterOpen,
        isLoginOpen: state.isLoginOpen
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Modal);

