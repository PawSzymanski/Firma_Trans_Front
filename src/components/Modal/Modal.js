import React, {Component} from 'react';
import styles from './Modal.module.scss';
import ButtonUI from "../Button/ButtonUI";
import LoginForm from "../LoginForm/LoginForm";
import RegisterFields from "../RegisterForm/RegisterFields";

class Modal extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div className={styles.wrapper}>
                <ButtonUI onClick={this.props.closeModalFn}>X</ButtonUI>
                {this.props.isLogOpen && <LoginForm /> }
                {this.props.isRegOpen && <RegisterFields />}

            </div>
        );
    }
}

export default Modal;
