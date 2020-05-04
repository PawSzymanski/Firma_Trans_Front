import React, { Component } from 'react';
import axios from 'axios';
import BasicTextFields from "./BasicTextFields"
import Title from "../Title/Title";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        children:'',
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        const url = '/api/clients/add';
        axios.post(url, {
            name:event.target[0].value,
            surname:event.target[1].value,
            login:event.target[2].value,
            password:event.target[3].value,
            email:event.target[4].value,
            birthday:event.target[5].value,
            phone:event.target[6].value,
        });
        event.target.reset();
    };



    render() {
        return (
           <div>
               <Title>Rejestracja użytkownika</Title>
                <BasicTextFields sumbitFn={this.handleSubmit}></BasicTextFields>
           </div>
        );
    }
}

export default RegisterForm;
