import React, {Component} from 'react';
import styles from './Header.module.scss';
import Nav from "../Navigation/Nav";
import ButtonUI from "../Button/ButtonUI";
import {toggleModal} from "../../actions";
import {connect} from "react-redux";

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <header className={styles.wrapper}>
                <i className="fas fa-route"/>
                <Nav/>
                <ButtonUI onClick={this.props.toggleModal}>Logowanie</ButtonUI>
                <ButtonUI onClick={this.props.toggleModal}>Rejestracja</ButtonUI>
            </header>
        );
    }
}

const mapDispatchToProps=dispatch=>({
    toggleModal:()=>dispatch( toggleModal()),
});


export default connect(null,mapDispatchToProps)(Header);




