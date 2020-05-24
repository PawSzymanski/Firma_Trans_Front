import React, { Component } from 'react';
import {fetchRoadDetails} from "../../actions";
import {connect} from "react-redux";
import RoadTable from "../../components/RoadTable/RoadTable";
import RoadForm from "../../components/RoadTable/RoadForm";
import style from './ConnSearch.module.scss'

class ConnSearch extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
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
});

const mapStateToProps = (state) => {
    return {
        road: state.road,
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(ConnSearch);
