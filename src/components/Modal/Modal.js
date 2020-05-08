import React, { Component } from 'react';
import styles from './Modal.module.scss'
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {toggleModal} from "../../actions";
import {connect} from "react-redux";
//import ButtonUI from "../Button/ButtonUI";



class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.logo}/>
                <div className={styles.form}>
                    {/*<ButtonUI onClick={this.props.toggleModal}>X</ButtonUI>*/}
                    <RegisterForm/>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps=dispatch=>({
    toggleModal:()=>dispatch( toggleModal()),
});


export default connect(null,mapDispatchToProps)(Modal);

