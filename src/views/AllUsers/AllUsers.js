import React, { Component } from 'react';
import axios from 'axios';

class AllUsers extends Component {
     constructor(props){
     super(props);
     this.state = {
         users:[],
     };
     }

    componentDidMount() {
        axios.get(`https://127.0.0.1:5000/api/clients/all`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    // componentWillMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        return (
            <h1>Użytkownicy</h1>
        );
    }
}

export default AllUsers;
