import React from "react";
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import {fetchUserDetails,toggleModal} from "../../actions";
import {connect} from "react-redux";
import styles from './RegisterForm.module.scss'
import Title from '../Title/Title'
import ButtonUI from "../Button/ButtonUI";

const RegisterForm =(props) =>(
    <div className={styles.wrapper}>
        <Title>Rejestracja użytkownika</Title>
        <Formik
            initialValues={{
                name:'',
                surname:'',
                login:'',
                password:'',
                email:'',
                birthday:'',
                phone:''
            }}
            onSubmit={async (values,{resetForm})=>{
                await axios.post('/api/clients/add',
                    {
                        ...values
                    })
                    .then(()=>console.log("Success"))
                    .catch((err)=>console.log(err));
                await props.fetchUserDetails();
                resetForm({});
                if(props.isModalOpen)
                {
                    props.toggleModal();
                }
            }}>
            {()=>(
                <Form className={styles.form} autoComplete="off">
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="name" type="text"  placeholder=" "/>
                        <label className={styles.label} htmlFor="name">Imię</label>
                        <div className={styles.formItemBar} />
                    </div>
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="surname" type="text"  placeholder=" "/>
                        <label className={styles.label} htmlFor="name">Nazwisko</label>
                        <div className={styles.formItemBar} />
                    </div>
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
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="email" type="text"  placeholder=" " />
                        <label className={styles.label} htmlFor="name">E-mail</label>
                        <div className={styles.formItemBar} />
                    </div>
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="birthday" type="date"  placeholder=" "/>
                        <label className={styles.label} htmlFor="name">Data urodzenia</label>
                        <div className={styles.formItemBar} />
                    </div>
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="phone" type="text"  placeholder=" "/>
                        <label className={styles.label} htmlFor="name">Numer telefonu</label>
                        <div className={styles.formItemBar} />
                    </div>
                     <ButtonUI type='submit'>Zatwierdź</ButtonUI>
                </Form>
            )}
        </Formik>
    </div>
)
const mapDispatchToProps=dispatch=>({
    fetchUserDetails:()=>dispatch(fetchUserDetails()),
    toggleModal:()=>dispatch(toggleModal()),
});

const mapStateToProps = (state) => {
    return { isModalOpen: state.isModalOpen };
};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);
