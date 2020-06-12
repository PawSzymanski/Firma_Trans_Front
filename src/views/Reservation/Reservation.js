import React, { Component } from 'react';
import {fetchReservationDetails} from "../../actions";
import {connect} from "react-redux";
import ReservationTable from "../../components/ReservationTable/ReservationTable";
import style from "../ConnectionSearch/ConnSearch.module.scss";
import Title from "../../components/Title/Title";

export class Reservation extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
         this.props.fetchReservationDetails(this.props.userLogin);

    }

    render() {
        return (
            <div className={style.wrapper}>
                <Title secondary>Rezerwacje użytkownika</Title>
                <div className={style.tableWrapper} >
                    <ReservationTable/>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps=dispatch=>({
    fetchReservationDetails:(user)=>dispatch(fetchReservationDetails(user)),
});

const mapStateToProps = state=>({
    userLogin: state.userLogin,
    userRole:state.userRole,
})


export default connect(mapStateToProps,mapDispatchToProps)(Reservation);

