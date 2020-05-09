import React from "react";
import {Formik, Form, Field} from 'formik';
import {toggleModal, toggleLogin} from "../../actions";
import {connect} from "react-redux";
import styles from './RegisterForm.module.scss'
import Title from '../Title/Title'
import ButtonUI from "../Button/ButtonUI";

const LoginForm =(props) =>(
    <div className={styles.wrapper}>
        <Title>Logowanie użytkownika</Title>
        <Formik
            initialValues={{
                login:'',
                password:'',
            }}
            onSubmit={async (values,{resetForm})=>{
                resetForm({});
                if(props.isModalOpen)
                {
                    props.toggleModal();
                    props.toggleLogin();
                }
            }}>
            {()=>(
                <Form className={styles.form} autoComplete="off">
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="login" type="text"  placeholder=" "/>
                        <label className={styles.label} htmlFor="name">Login</label>
                        <div className={styles.formItemBar} />
                    </div>
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="password" type="password"  placeholder=" "/>
                        <label className={styles.label} htmlFor="name">Hasło</label>
                        <div className={styles.formItemBar} />
                    </div>
                    <ButtonUI type='submit'>Zatwierdź</ButtonUI>
                </Form>
            )}
        </Formik>
    </div>
)
const mapDispatchToProps=dispatch=>({
    toggleModal:()=>dispatch(toggleModal()),
    toggleLogin:()=>dispatch(toggleLogin()),
});

const mapStateToProps = (state) => {
    return { isModalOpen: state.isModalOpen };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
