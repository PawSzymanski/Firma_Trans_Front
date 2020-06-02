import React from 'react';
import './Root.css';
import { BrowserRouter, Route,Redirect} from 'react-router-dom';
import ConnectionSearch from "../ConnectionSearch/ConnSearch"
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Users from "../Users/Users";
import MainPage from "../MainPage/MainPage";
import Register from "../Register/Register";
import Roads from "../Roads/Roads";
import {connect} from "react-redux";
import Reservation from "../Reservation/Reservation";
import Loyality from "../Loyality/Loyality";
import {getUsers} from "../../reducers";

export class Root extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {

        return (

            <BrowserRouter>
                <Header/>
                <Route>
                    {this.props.isLogged===false && <Redirect to="/dashboard"  />}
                    <Route exact path="/dashboard" component={MainPage}/>
                    <Route path="/connSearch" component={ConnectionSearch}  />
                    <Route path="/allUsers"  component={Users}  />
                    <Route path="/register" component={Register}  />
                    <Route path="/reservation" component={Reservation}  />
                    <Route path="/loyality" component={Loyality}  />
                    <Route path="/roads" component={Roads}  />
                </Route>
                {this.props.isModalOpen && <Modal/>}
            </BrowserRouter>

        );
    }
}

const mapStateToProps = state=>({
    users: getUsers(state),
    userRole:state.userRole,
    isModalOpen:state.isModalOpen,
    isLogged:state.isLogged
})

export default connect(mapStateToProps,null)(Root);


