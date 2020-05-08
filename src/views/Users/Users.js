import React, { Component } from 'react';
import styles from './Users.module.scss'
import {fetchUserDetails} from "../../actions";
import {getProducts} from "../../reducers";
import {connect} from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import UserTable from "../../components/UserTable/UserTable";

class Users extends Component {
     constructor(props){
     super(props);
     this.state = {

     };
     }

    componentDidMount() {
        this.props.fetchUserDetails();
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <UserTable/>
                <RegisterForm />
            </div>
        );
    }
}


const mapDispatchToProps=dispatch=>({
    fetchUserDetails:()=>dispatch(fetchUserDetails()),
});


const mapStateToProps = state=>({
    users: getProducts(state),
})

export default connect(mapStateToProps,mapDispatchToProps)(Users);

