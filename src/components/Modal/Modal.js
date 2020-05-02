import React from 'react';
import styles from './Modal.module.scss';
import Button from "../Button/Button";
import AllForm from "../LoginRegisterForm/AllForm";

const Modal = ({closeModalFn}) => (

    <div className={styles.wrapper}>
        <Button closeBtn onClick={closeModalFn}>X</Button>
        <AllForm/>
    </div>
);

export default Modal;
