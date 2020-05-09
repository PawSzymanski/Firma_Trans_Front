import React, { Component } from 'react';
import styles from './Users.module.scss'
import {fetchUserDetails} from "../../actions";
import {getUsers} from "../../reducers";
import {connect} from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import UserTable from "../../components/UserTable/UserTable";
import ActionBtn from "../../components/Button/ActionBtn";
import ItemBar from "../../components/ItemBar/ItemBar";

class Users extends Component {
     constructor(props){
     super(props);
     this.state = {


     };
     }

    componentDidMount() {
        this.props.fetchUserDetails();
    }

    toggleVisible=()=>{
         return{
             isVisible:!this.state.isVisible,
         }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <UserTable/>
               <ItemBar >
                       <RegisterForm />
               </ItemBar>
                <div className={styles.actBtn}>
                   <ActionBtn/>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps=dispatch=>({
    fetchUserDetails:()=>dispatch(fetchUserDetails()),
});


const mapStateToProps = state=>({
    users: getUsers(state),
})

export default connect(mapStateToProps,mapDispatchToProps)(Users);

