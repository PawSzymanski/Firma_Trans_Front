import React from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Button from "../Button/Button";


const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <i className="fas fa-route"></i>
        <Navigation/>
        <Button  onClick={openModalFn}>Rejestracja</Button>
        <Button onClick={openModalFn}>Login</Button>
    </header>
);

export default Header;
