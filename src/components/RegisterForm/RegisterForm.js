import React, { Component } from 'react';
import RegisterFields from "./RegisterFields"
import axios from 'axios';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {

        console.log(this.state);
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

        if(this.props.isopenModal)
        {this.props.closeModal();}
    };


    render() {
        return (
            <div>
                <RegisterFields sumbitFn={this.handleSubmit}></RegisterFields>
            </div>
        );
    }
}

export default RegisterForm;
