import React from 'react';
import './App.css';
import Test1 from './components/Test1/Test1';

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
            <Test1 />
            </div>
        );
    }
}

export default App;
