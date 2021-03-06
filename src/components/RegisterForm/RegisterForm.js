import React from "react";
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import {fetchUserDetails, toggleModal, toggleRegister} from "../../actions";
import {connect} from "react-redux";
import styles from './RegisterForm.module.scss'
import Title from '../Title/Title'
import ButtonUI from "../Button/ButtonUI";
import {useAlert} from "react-alert";

function RegisterForm (props) {
    const alert = useAlert()

    return (
        <div className={styles.wrapper}>
            {props.isModalOpen? <Title>Rejestracja użytkownika</Title>:<Title>Dodaj/Edytuj użytkownika</Title>}
            <Formik
                enableReinitialize
                initialValues={{
                    id:props.editUser.id,
                    name: props.editUser.name,
                    surname: props.editUser.surname,
                    login: props.editUser.login,
                    password: props.editUser.password,
                    email: props.editUser.email,
                    birthday: props.editUser.birthday,
                    phone: props.editUser.phone,
                }}
                onSubmit={async (values, {resetForm}) => {
                    await axios.post('/api/clients/add',
                        {
                            ...values,
                        })
                        .then(() =>
                        {props.isModalOpen? alert.success(<div style={{textTransform: 'lowercase', textAlign: 'center'}}>Zarejestrowano</div>)
                            :
                            alert.success(<div style={{textTransform: 'lowercase', textAlign: 'center'}}>operacja udana</div>)})
                        .catch((err) => alert.error(<div style={{textTransform: 'lowercase', textAlign: 'center'}}>błąd</div>));

                    if(props.isModalOpen===false) {
                        props.resetFm();
                    }

                    await props.fetchUserDetails();
                    resetForm({});
                    if (props.isModalOpen) {
                        props.toggleModal();
                        props.toggleRegister();
                    }

                }}>
                {() => (
                    <Form className={styles.form} autoComplete="off">
                        <div className={styles.formItem}>
                            <Field className={styles.input} name="name" type="text" placeholder=" " required/>
                            <label className={styles.label} htmlFor="name">Imię</label>
                            <div className={styles.formItemBar}/>
                        </div>
                        <div className={styles.formItem}>
                            <Field className={styles.input} name="surname" type="text" placeholder=" " required/>
                            <label className={styles.label} htmlFor="name">Nazwisko</label>
                            <div className={styles.formItemBar}/>
                        </div>
                        <div className={styles.formItem}>
                            <Field className={styles.input} name="login" type="text" placeholder=" " required/>
                            <label className={styles.label} htmlFor="name">Login</label>
                            <div className={styles.formItemBar}/>
                        </div>
                        <div className={styles.formItem}>
                            <Field className={styles.input} name="password" type="password" placeholder=" " required/>
                            <label className={styles.label} htmlFor="name">Hasło</label>
                            <div className={styles.formItemBar}/>
                        </div>
                        <div className={styles.formItem}>
                            <Field className={styles.input} name="email" type="text" placeholder=" " required/>
                            <label className={styles.label} htmlFor="name">E-mail</label>
                            <div className={styles.formItemBar}/>
                        </div>
                        <div className={styles.formItem}>
                            <Field className={styles.input} name="birthday" type="date" placeholder=" " required/>
                            <label className={styles.label} htmlFor="name">Data urodzenia</label>
                            <div className={styles.formItemBar}/>
                        </div>
                        <div className={styles.formItem}>
                            <Field className={styles.input} name="phone" type="text" placeholder=" " required/>
                            <label className={styles.label} htmlFor="name">Numer telefonu</label>
                            <div className={styles.formItemBar}/>
                        </div>
                        <ButtonUI type='submit'>Zatwierdź</ButtonUI>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    fetchUserDetails:()=>dispatch(fetchUserDetails()),
    toggleModal:()=>dispatch(toggleModal()),
    toggleRegister:()=>dispatch( toggleRegister()),
});

const mapStateToProps = (state) => {
    return { isModalOpen: state.isModalOpen };
};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);
