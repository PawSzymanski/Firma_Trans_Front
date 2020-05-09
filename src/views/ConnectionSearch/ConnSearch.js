import React, { Component } from 'react';
import {fetchRoadDetails} from "../../actions";
import {connect} from "react-redux";
import RoadTable from "../../components/RoadTable/RoadTable";
import RoadForm from "../../components/RoadTable/RoadForm";
import style from './ConnSearch.module.scss'

class ConnSearch extends Component {


    render() {
        return (
            <div className={style.wrapper}>
                <RoadForm/>
                <div className={style.tableWrapper} >
                <RoadTable/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=dispatch=>({
    fetchRoadDetails:()=>dispatch(fetchRoadDetails()),
});



export default connect(null,mapDispatchToProps)(ConnSearch);
