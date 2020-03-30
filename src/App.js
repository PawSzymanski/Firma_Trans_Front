import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
    state = {
        contacts: []
    };

    componentDidMount() {
        fetch("api/vehicle/2")
            .then(res => res.json())
            .then(json => {
                this.setState({ contacts: json.results });
                console.log(json);
            });

    }

    render() {
        return (
            <div>
               Testowa apka działa, teraz trzeba sie reacta nauczyć xD

            </div>
        );
    }
}

export default App;
