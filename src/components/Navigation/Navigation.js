import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }


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
                      //activeClassName={styles.navItemLinkActive}
                      className={styles.navItemLink} to="/">Kursy</NavLink>
              </li>
              <li className={styles.navItem}>
                  <NavLink
                      //activeClassName={styles.navItemLinkActive}
                      className={styles.navItemLink} to="/">Rezerwacje</NavLink>
              </li>
          </ul >
        </nav>
    );
  }
}

export default Navigation;
