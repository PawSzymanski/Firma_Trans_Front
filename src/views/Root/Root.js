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


export class Root extends React.Component {
    state = {
        isModalOpen: false,
        isLoginOpen: true,
        isRegisterOpen: false,
    };


    showLoginBox = () => {
        this.setState({
            isLoginOpen: true,
            isRegisterOpen:false,
        })
    }

    showRegisterBox=()=>{
        this.setState({
            isRegisterOpen:true,
            isLoginOpen:false
        });
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }


    render() {

        return (

            <BrowserRouter>
                <Header
                        openLogForm={this.showLoginBox}
                        openRegForm={this.showRegisterBox}/>
                <Switch >
                    <Route exact path="/"  component={MainPage}   />
                    <Route  path="/connSearch" component={ConnectionSearch}  />
                    <Route path="/allUsers"  component={Users}  />
                    <Route  path="/register" component={Register}  />
                </Switch>
                {this.props.isModalOpen && <Modal/>}
            </BrowserRouter>

        );
    }
}

function mapStateToProps(state) {
    const { isModalOpen } = state
    return { isModalOpen }
}

export default connect(mapStateToProps,null)(Root);


