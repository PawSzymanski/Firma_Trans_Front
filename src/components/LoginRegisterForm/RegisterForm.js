import React, { Component } from 'react';
import styles from './LoginRegisterForm.module.scss'
import Button from "../Button/Button";
import Title from "../Title/Title";
import axios from 'axios';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                born_date: '',
                email: '',
                block: 'false',
                login: '',
                name: '',
                password: '',
                phone: '',
                surname: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {

        console.log(this.state);

        const url = '/api/clients/add';
            axios.post(url, {
                birthday:this.state.born_date,
                email:this.state.email,
                isBlocked:this.state.block,
                login:this.state.login,
                name:this.state.name,
                password:this.state.password,
                phone:this.state.phone,
                surname:this.state.surname,
            });

        event.preventDefault();
        window.location.reload(false);
    };

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
        <form ref={form => this.form = form} className={styles.wrapper} onSubmit={this.handleSubmit}>
            <Title>Cześć, zarejestruj  się</Title>

            <label htmlFor="username">Imie</label>
            <input type="text"  name="name" value={this.state.name} onChange={this.handleInputChange} />

            <label htmlFor="username">Nazwisko</label>
            <input type="text" name="surname" value={this.state.surname} onChange={this.handleInputChange}/>

            <label htmlFor="username">Login</label>
            <input type="text"  name="login" value={this.state.login} onChange={this.handleInputChange} />

            <label htmlFor="username">Hasło</label>
            <input type="password"  name="password" value={this.state.password} onChange={this.handleInputChange} />

            <label htmlFor="username">E-mail</label>
            <input type="text"  name="email" value={this.state.email} onChange={this.handleInputChange} />

            <label htmlFor="username">D.urodzenia</label>
            <input type="date"  name="born_date" value={this.state.born_date} onChange={this.handleInputChange} />

            <label htmlFor="username">Telefon</label>
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} />

            <Button  type='sumbit'>Zatwierdź</Button>
        </form>
    );
  }
}

export default RegisterForm;
