import React from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Button from "../Button/Button";


const Header = () => (
    <header className={styles.wrapper}>
        <Navigation/>
        <Button>Rejestracja</Button>
        <Button>Login</Button>
    </header>
);

export default Header;
