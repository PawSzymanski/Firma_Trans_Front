import React, { Component } from 'react';
import {fetchRoadDetails, fetchUserPoints} from "../../actions";
import {connect} from "react-redux";
import RoadTable from "../../components/RoadTable/RoadTable";
import RoadForm from "../../components/RoadTable/RoadForm";
import style from './ConnSearch.module.scss'
import {getPoints} from "../../reducers";

export class ConnSearch extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
       this.props.fetchUserPoints(this.props.userLogin);
    }

    render() {
        return (
            <div className={style.wrapper}>
                <RoadForm />
                <div className={style.tableWrapper} >
                    <p>Kliknij na połączenie, aby dokonać rezerwacji</p>
                <RoadTable/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=dispatch=>({
    fetchRoadDetails:()=>dispatch(fetchRoadDetails()),
    fetchUserPoints:(user)=>dispatch(fetchUserPoints(user)),
});

const mapStateToProps = (state) => {
    return {
        roads: state.road,
        points:getPoints(state),
        userLogin: state.userLogin,
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(ConnSearch);
