import React, { Component } from 'react';
import styles from './Users.module.scss'
import UserTable from '../../components/UserTable/UserTable'
import {fetchUserDetails} from "../../actions";
import {getProducts} from "../../reducers";
import {connect} from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

class Users extends Component {
     constructor(props){
     super(props);
     this.state = {

     };
     }

    render() {
        return (
            <div className={styles.wrapper}>
                <UserTable />
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

