import React, { Component } from 'react';
import axios from 'axios';
import RegisterFields from "./RegisterFields"
import Title from "../Title/Title";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }





    render() {
        return (
           <div>
               <Title>Rejestracja użytkownika</Title>
                <RegisterFields sumbitFn={this.handleSubmit}></RegisterFields>
           </div>
        );
    }
}

export default RegisterForm;
