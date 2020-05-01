import React from 'react';
import styles from './Button.module.scss';

const Button=({children,closeBtn,...props}) =>{

    const buttonClass = closeBtn ? styles.closeBtn : styles.myButton;

        return (
            <button className={buttonClass} {...props}>
                {children}
            </button>
        );
}
export default Button;
