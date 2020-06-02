import React, { Component } from 'react';
import styles from './Modal.module.scss'
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {toggleModal} from "../../actions";
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
                        </div>
                    </div>
                }

            </>
        );
    }
}

const mapDispatchToProps=dispatch=>({
    toggleModal:()=>dispatch( toggleModal()),
});

const mapStateToProps = (state) => {
    return {
        isRegisterOpen: state.isRegisterOpen,
        isLoginOpen: state.isLoginOpen
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Modal);

