import React from "react";
import {Formik, Form, Field} from 'formik';
import axios from 'axios';

const NewForm =() =>(
    <div>
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
            onSubmit={({name,surname,login,password,email,birthday,phone})=>{
                axios.post('/api/clients/add',
                {
                    name,
                    surname,
                    login,
                    password,
                    email,
                    birthday,
                    phone,
                })
                .then(()=>console.log("Success"))
                .catch((err)=>console.log(err));
            }}>
            {()=>(
                <Form>
                    <Field name="name" type="text"/>
                    <Field name="surname" type="text"/>
                    <Field name="login" type="text"/>
                    <Field name="password" type="password"/>
                    <Field name="email" type="text"/>
                    <Field name="birthday" type="date"/>
                    <Field name="phone" type="text"/>
                        <button type="sumbit">test</button>
                </Form>
                )}
        </Formik>
    </div>
)

export default NewForm;
