import React, { Component } from 'react';
import {connect} from "react-redux";
import AllRoadTable from "../../components/RoadTable/AllRoadTable";
import {fetchAllRoadDetails,fetchAllConnection} from "../../actions";
import styles from "../../views/Roads/Roads.module.scss";
import AllConnectionTable from "../../components/RoadTable/AllConnectionTable";
import Title from "../../components/Title/Title";

export class Roads extends Component {
    constructor(props){
        super(props);
        this.state = {
            Worker:'Worker_Role',
            Admin:'Admin_Role',
            Office:'Office_Role',
        };
    }

     componentDidMount() {
         this.props.fetchAllRoadDetails();
         this.props.fetchAllConnection();
    }


    render() {
        return (
            <>
            {((this.props.userRole === this.state.Admin) || (this.props.userRole === this.state.Office)) &&

            <div className={styles.wrapper}>
                <div className={styles.roadTable}>
                     <Title>Kursy</Title>
                    <AllRoadTable/>
                </div>
                <div className={styles.connTable}>
                    <Title>Trasy</Title>
                    <AllConnectionTable/>
                </div>

            </div>
                }

                {this.props.userRole === this.state.Worker &&

                <div className={styles.wrapperSecondary}>
                    <div className={styles.roadTable}>
                        <Title>Kursy</Title>
                        <AllRoadTable/>
                    </div>
                </div>
                }

                </>
        );
    }
}


const mapDispatchToProps=dispatch=>({
    fetchAllRoadDetails:()=>dispatch(fetchAllRoadDetails()),
    fetchAllConnection:()=>dispatch(fetchAllConnection()),
});

const mapStateToProps = state=>({
    userRole:state.userRole,
})


export default connect(mapStateToProps,mapDispatchToProps)(Roads);

