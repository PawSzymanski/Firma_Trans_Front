import React from "react";
import {Formik, Form, Field} from 'formik';
import {connect} from "react-redux";
import styles from '../RegisterForm/RegisterForm.module.scss'
import ButtonUI from "../Button/ButtonUI";

function ConnectionForm (props) {

    return (
        <div className={styles.wrapper}>
            <Formik
                initialValues={{
                    driver:'',
                    vehicle:'',
                    date:'',
                }}
                onSubmit={ (values,{resetForm})=>{
                    resetForm({});

                    props.handleChange(values.driver,values.vehicle,values.date)
                }}>
                {()=>(
                    <Form className={styles.form} autoComplete="off">
                        <div className={styles.formItem}>
                            <Field className={styles.inputSecondary} name="driver" type="text"  placeholder="Kierowca" required/>
                            <div className={styles.formItemBarSecondary} />
                        </div>
                        <div className={styles.formItem}>
                            <Field className={styles.inputSecondary} name="vehicle" type="text"  placeholder="Pojazd" required/>
                            <div className={styles.formItemBarSecondary} />
                        </div>
                        <div className={styles.formItem}>
                            <Field className={styles.inputSecondary} name="date" type="date"  placeholder="Data" required/>
                            <div className={styles.formItemBarSecondary} />
                        </div>
                        <ButtonUI type='submit'>Zatwierdź</ButtonUI>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

const mapDispatchToProps=dispatch=>({

});

const mapStateToProps = (state) => {

};

export default connect(null,null)(ConnectionForm);
