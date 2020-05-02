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
        axios.get(`/api/clients/all`)
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
            <ul>
                {this.state.users.map(users => <li>{users}</li>)}
            </ul>
        );
    }
}

export default AllUsers;
