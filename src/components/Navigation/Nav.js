import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

class Nav extends Component {

    render() {
        return (
            <nav>
                <ul className={styles.wrapper}>
                    <li className={styles.navItem}>
                        <NavLink exact
                                 activeClassName={styles.navItemLinkActive}
                                 className={styles.navItemLink} to="/">Strona główna</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink
                            activeClassName={styles.navItemLinkActive}
                            className={styles.navItemLink} to="/connSearch">Wyszukiwarka połączeń</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink
                            activeClassName={styles.navItemLinkActive}
                            className={styles.navItemLink} to="/allUsers">Użytkownicy</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink
                            activeClassName={styles.navItemLinkActive}
                            className={styles.navItemLink} to="/reservation">Rezerwacje</NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink
                            activeClassName={styles.navItemLinkActive}
                            className={styles.navItemLink} to="/bbbb">Program lojalnościowy</NavLink>
                    </li>
                </ul >
            </nav>
        );
    }
}

export default Nav;
