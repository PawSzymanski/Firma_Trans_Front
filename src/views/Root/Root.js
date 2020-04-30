import React from 'react';
import './Root.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConnectionSearch from "../ConnectionSearch/ConnSearch"
import MainPage from "../MainPage/MainPage";
import Header from "../../components/Header/Header";




export class Root extends React.Component {
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
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/mainPage" component={MainPage} />
                    <Route path="/connSearch" component={ConnectionSearch} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Root;
