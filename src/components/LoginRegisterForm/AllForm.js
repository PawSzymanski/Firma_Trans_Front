import React from 'react';
import styles from './AllForm.module.scss'
import Button from "../Button/Button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


class AllForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
        };
    }

    showLoginBox=()=>{
        this.setState({isRegisterOpen:false, isLoginOpen:true});
    }

    showRegisterBox=()=>{
        this.setState({isRegisterOpen:true, isLoginOpen:false});
    }


    render() {

        return (
        <div className={styles.wrapper}>
            <Button closeBtn onClick={this.showLoginBox.bind(this)}>Zaloguj się</Button>
            <Button closeBtn onClick={this.showRegisterBox.bind(this)}>Zarejestruj się</Button>
            <div>
                {this.state.isLoginOpen && <LoginForm/>}
                {this.state.isRegisterOpen && <RegisterForm/>}
            </div>
        </div>
        );
    }
}

export default AllForm;
