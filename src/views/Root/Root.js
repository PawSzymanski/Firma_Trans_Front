import React from 'react';
import './Root.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConnectionSearch from "../ConnectionSearch/ConnSearch"
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal";
import MainPage from "../MainPage/MainPage";


export class Root extends React.Component {
    state = {
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
    showLoginBox=()=>{
        this.setState({isRegisterOpen:false, isLoginOpen:true});
    }

    showRegisterBox=()=>{
        this.setState({isRegisterOpen:true, isLoginOpen:false});
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
                <Header openModalFn={this.openModal} />
                <Switch>
                    <Route exact path="/mainPage" component={MainPage} />
                    <Route path="/connSearch" component={ConnectionSearch} />
                </Switch>
                {isModalOpen && <Modal closeModalFn={this.closeModal} />}
            </BrowserRouter>
        );
    }
}

export default Root;
