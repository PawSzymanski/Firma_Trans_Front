import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
        <nav>
          <ul className={styles.wrapper}>
            <li className={styles.navItem}>
              <NavLink exact
                       activeClassName={styles.navItemLinkActive}
                       className={styles.navItemLink} to="/mainPage">Strona główna</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                  activeClassName={styles.navItemLinkActive}
                  className={styles.navItemLink} to="/connSearch">Wyszukiwarka połączeń</NavLink>
            </li>
              <li className={styles.navItem}>
                  <NavLink
                      //activeClassName={styles.navItemLinkActive}
                      className={styles.navItemLink} to="/">widok 3</NavLink>
              </li>
              <li className={styles.navItem}>
                  <NavLink
                      //activeClassName={styles.navItemLinkActive}
                      className={styles.navItemLink} to="/">widok 4</NavLink>
              </li>
          </ul >
        </nav>
    );
  }
}

export default Navigation;
