import React from 'react';
import './Root.css';
import { BrowserRouter, Route, Switch   } from 'react-router-dom';
import ConnectionSearch from "../ConnectionSearch/ConnSearch"
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Users from "../Users/Users";
import MainPage from "../MainPage/MainPage";
import Register from "../Register/Register";
import {connect} from "react-redux";
import Reservation from "../Reservation/Reservation";


export class Root extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {

        return (

            <BrowserRouter>
                <Header/>
                <Switch >
                    <Route exact path="/"  component={MainPage}   />
                    <Route  path="/connSearch" component={ConnectionSearch}  />
                    <Route path="/allUsers"  component={Users}  />
                    <Route  path="/register" component={Register}  />
                    <Route  path="/reservation" component={Reservation}  />
                </Switch>
                {this.props.isModalOpen && <Modal/>}
            </BrowserRouter>

        );
    }
}


const mapStateToProps = ({isModalOpen }) => ({
    isModalOpen,
});


export default connect(mapStateToProps,null)(Root);


