import React, { Component } from 'react';
import styles from './LoginRegisterForm.module.scss'
import Button from "../Button/Button";
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
            <form className={styles.wrapper} onSubmit={this.handleSubmit}>
                <Title>Cześć, zaloguj się</Title>

                <label htmlFor="username">Login</label>
                <input type="text" name="login" value={this.state.login} onChange={this.handleInputChange} />

                <label htmlFor="username">Hasło</label>
                <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} />

                <Button type="sumbit">Zatwierdź</Button>
            </form>
        );
    }
}

export default LoginForm;
