import React from "react";
import {Formik, Form, Field} from 'formik';
import {connect} from "react-redux";
import styles from '../RegisterForm/RegisterForm.module.scss'
import ButtonUI from "../Button/ButtonUI";
import Title from "../Title/Title";
import {fetchRoadDetails} from "../../actions";

const RoadForm =(props) =>(
    <div className={styles.wrapper}>
        <Title secondary >Wyszukaj połączenie</Title>
        <Formik
            initialValues={{
                startPoint:'',
                endPoint:'',
            }}
            onSubmit={async (values,{resetForm})=>{

               await props.fetchRoadDetails(values.startPoint,values.endPoint);

                resetForm({});
            }}>
            {()=>(
                <Form className={styles.form} autoComplete="off">
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="startPoint" type="text"  placeholder=" "/>
                        <label className={styles.label} htmlFor="name">Przystanek początkowy</label>
                        <div className={styles.formItemBar} />
                    </div>
                    <div className={styles.formItem}>
                        <Field className={styles.input} name="endPoint" type="text"  placeholder=" "/>
                        <label className={styles.label} htmlFor="name">Przystanek końcowy</label>
                        <div className={styles.formItemBar} />
                    </div>
                    <ButtonUI type='submit'>Zatwierdź</ButtonUI>
                </Form>
            )}
        </Formik>
    </div>
)

const mapDispatchToProps=dispatch=>({
    fetchRoadDetails:(startPoint,endPoint)=>dispatch(fetchRoadDetails(startPoint,endPoint)),
});


const mapStateToProps = (state) => {
    return {
        startPointSTR: state.startPoint,
        endPointSTR: state.endPoint,
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(RoadForm);
