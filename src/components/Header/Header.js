import React, {Component} from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import ButtonUI from "../Button/ButtonUI";


class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <header className={styles.wrapper}>
                <i className="fas fa-route"></i>
                <Navigation/>
                <ButtonUI
                    onClick={() => {
                        this.props.openModalFn();
                        this.props.openLogForm();
                    }}>LOGOWANIE</ButtonUI>

                <ButtonUI
                    onClick={() => {
                        this.props.openModalFn();
                        this.props.openRegForm();
                    }}>REJESTRACJA</ButtonUI>
            </header>
        );
    }
}
export default Header;

