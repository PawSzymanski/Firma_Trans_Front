import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import ButtonUI from "../Button/ButtonUI";
import styles from './Login.module.scss'
import {makeStyles} from "@material-ui/core/styles";
import Title from "../Title/Title";





class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            login:'',
            password:'',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }


    handleInputChange(event) {
        const target=event.target;
        const value=target.value;
        const name=target.name;

        this.setState({
            [name]:value
        })
    }


    render() {



        return (
            <>
                <Title>Logowanie</Title>
            </>
        );
    }
}

export default LoginForm;
