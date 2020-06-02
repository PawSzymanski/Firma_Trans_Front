import React from 'react';
import styles from './Header.module.scss';
import Nav from "../Navigation/Nav";
import ButtonUI from "../Button/ButtonUI";
import {toggleModal} from "../../actions";
import {toggleLogin} from "../../actions";
import {toggleRegister} from "../../actions";
import {isLogout} from "../../actions";
import {connect} from "react-redux";
import {useAlert} from "react-alert";

function Header(props) {

    const alert = useAlert()

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
        props.isLogout();
        alert.show(<div style={{ textTransform: 'lowercase', textAlign:'center' }}>wylogowano</div>)
    }
            return (
                <header className={styles.wrapper}>
                    <i className="fas fa-route"/>
                    <Nav/>
                    {props.isLogged ?
                        <>
                            <p>Zalogowano jako: {props.userLogin} </p>
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
    isLogout:()=>dispatch( isLogout()),
});

const mapStateToProps = ({ userLogin=null,isLogged }) => ({
    userLogin,isLogged
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);




