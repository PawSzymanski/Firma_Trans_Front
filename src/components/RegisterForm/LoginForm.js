import React from "react";
import {Formik, Form, Field} from 'formik';
import {toggleModal, toggleLogin, authenticateFn} from "../../actions";
import {connect} from "react-redux";
import styles from './RegisterForm.module.scss'
import Title from '../Title/Title'
import ButtonUI from "../Button/ButtonUI";
import {useAlert} from 'react-alert'

function LoginForm (props) {
    const alert = useAlert()

return (
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
                    const response=await props.authenticateFn(values.login,values.password);

                    response ?
                        alert.success(<div style={{textTransform: 'lowercase', textAlign: 'center'}}>zalogowano</div>)
                        :
                        alert.error(<div style={{ textTransform: 'lowercase',textAlign:'center' }}>błędne hasło lub login</div>)
                }
            }}>
            {()=>(
                <Form className={styles.form} autoComplete="off">
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="login" type="text"  placeholder=" " required/>
                        <label className={styles.label} htmlFor="name">Login</label>
                        <div className={styles.formItemBar} />
                    </div>
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="password" type="password"  placeholder=" " required/>
                        <label className={styles.label} htmlFor="name">Hasło</label>
                        <div className={styles.formItemBar} />
                    </div>
                    <ButtonUI type='submit'>Zatwierdź</ButtonUI>
                </Form>
            )}
        </Formik>
    </div>
);
}

const mapDispatchToProps=dispatch=>({
    toggleModal:()=>dispatch(toggleModal()),
    toggleLogin:()=>dispatch(toggleLogin()),
    authenticateFn:(login,password)=>dispatch(authenticateFn(login,password)),
});

const mapStateToProps = (state) => {
    return { isModalOpen: state.isModalOpen,
                isLogged: state.isLogged};
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
