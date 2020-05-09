import React, {Component} from 'react';
import styles from './Header.module.scss';
import Nav from "../Navigation/Nav";
import ButtonUI from "../Button/ButtonUI";
import {toggleModal} from "../../actions";
import {toggleLogin} from "../../actions";
import {toggleRegister} from "../../actions";
import {connect} from "react-redux";

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    openModalReg = () => {
            this.props.toggleModal();
            this.props.toggleRegister();
    }

    openModalLog = () => {
        this.props.toggleModal();
        this.props.toggleLogin();
    }


    render() {
        return (
            <header className={styles.wrapper}>
                <i className="fas fa-route"/>
                <Nav/>
                <ButtonUI onClick={this.openModalLog}>Logowanie</ButtonUI>
                <ButtonUI onClick={this.openModalReg}>Rejestracja</ButtonUI>
            </header>
        );
    }
}

const mapDispatchToProps=dispatch=>({
    toggleModal:()=>dispatch( toggleModal()),
    toggleLogin:()=>dispatch( toggleLogin()),
    toggleRegister:()=>dispatch( toggleRegister()),
});


export default connect(null,mapDispatchToProps)(Header);




