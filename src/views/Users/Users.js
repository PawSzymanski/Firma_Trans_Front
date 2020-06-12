import React, { Component } from 'react';
import styles from './Users.module.scss'
import {fetchUserDetails} from "../../actions";
import {getUsers} from "../../reducers";
import {connect} from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import UserTable from "../../components/UserTable/UserTable";
import ActionBtn from "../../components/Button/ActionBtn";
import ItemBar from "../../components/ItemBar/ItemBar";

const initialState = {
    editUser: {
        id:'',
        name:'',
        surname:'',
        login:'',
        password:'',
        email:'',
        birthday:'',
        phone:'',

    },};

export class Users extends Component {
     constructor(props){
     super(props);
     this.state = {
        editUser: {
            id:'',
            name:'',
            surname:'',
            login:'',
            password:'',
            email:'',
            birthday:'',
            phone:'',

        },
     };
         this.state = initialState;
     }

    componentDidMount() {
        this.props.fetchUserDetails();

    }

    handleClick = (id,name,surname,login,password,email,birthday,phone, role ) => {
        return (event) => {
            // console.log(`You clicked  id ${id} ${name} ${surname} ${login} ${password} ${email} ${birthday} ${phone} ${role}`);

            this.setState(() => {
                return {editUser: {id:id,name:name,surname:surname,login:login,password:password,email:email,birthday:birthday,phone:phone,role:role}};
            }
            );

        }

    }

    resetBuilder=()=> {
        this.setState(initialState);
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <UserTable handleFn={this.handleClick}/>
               <ItemBar >
                       <RegisterForm resetFm={this.resetBuilder} {...this.state}/>
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

