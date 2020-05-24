import React from 'react';
import styles from './Header.module.scss';
import Nav from "../Navigation/Nav";
import ButtonUI from "../Button/ButtonUI";
import {toggleModal} from "../../actions";
import {toggleLogin} from "../../actions";
import {toggleRegister} from "../../actions";
import {connect} from "react-redux";

function Header (props) {

    const openModalReg = () => {
            props.toggleModal();
            props.toggleRegister();
    }

    const openModalLog = () => {
        props.toggleModal();
        props.toggleLogin();
    }

    const logout=()=>{
        localStorage.clear();
        window.location.reload(false);
    }

        return (
            <header className={styles.wrapper}>
                <i className="fas fa-route"/>
                <Nav/>
                {props.isLogged ?
                    <>
                    <p>Zalogowano jako: {props.userLogin} o id: {this.props.userID}</p>
                    <ButtonUI onClick={logout}>Wyloguj</ButtonUI>
                    </>
                    :
                    <>
                    <ButtonUI onClick={openModalLog}>Logowanie</ButtonUI>
                    <ButtonUI onClick={openModalReg}>Rejestracja</ButtonUI>
                    </>}


            </header>
        );
}

const mapDispatchToProps=dispatch=>({
    toggleModal:()=>dispatch( toggleModal()),
    toggleLogin:()=>dispatch( toggleLogin()),
    toggleRegister:()=>dispatch( toggleRegister()),
});

const mapStateToProps = ({ userID = null,userLogin=null,isLogged }) => ({
    userID,userLogin,isLogged
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);




