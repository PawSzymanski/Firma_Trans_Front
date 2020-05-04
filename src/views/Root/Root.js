import React from 'react';
import './Root.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConnectionSearch from "../ConnectionSearch/ConnSearch"
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import MainPage from "../MainPage/MainPage";
import Users from "../Users/Users";


export class Root extends React.Component {
    state = {
        isLoginOpen: true,
        isRegisterOpen: false,
        isModalOpen: false,
    };

    componentDidMount() {
        fetch("api/vehicle/2")
            .then(res => res.json())
            .then(json => {
                this.setState({ contacts: json.results });
                console.log(json);
            });

    }

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
        const { isModalOpen } = this.state;

        return (
            <BrowserRouter>
                <Header openModalFn={this.openModal}
                        openLogForm={this.showLoginBox}
                        openRegForm={this.showRegisterBox}/>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/connSearch" component={ConnectionSearch} />
                    <Route path="/allUsers" component={Users} />
                </Switch>
                {isModalOpen && <Modal isLogOpen={this.state.isLoginOpen}
                                       isRegOpen={this.state.isRegisterOpen}
                                       closeModalFn={this.closeModal}/>}

            </BrowserRouter>
        );
    }
}

export default Root;
