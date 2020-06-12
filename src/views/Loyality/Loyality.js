import React, { Component } from 'react';
import {connect} from "react-redux";
import {getPoints} from "../../reducers";
import styles from './Loyality.module.scss';
import {fetchUserPoints} from "../../actions";
import Title from "../../components/Title/Title";


class Loyality extends Component {
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
            <div className={styles.wrapper}>
                <Title secondary>System lojalnościowy</Title>
                <h2>Aktualnie posiadasz: {this.props.points.points} punktów </h2>
                <p>Za każdą zrelizowaną rezerwację, otrzymasz 100 punktów, które możesz wykorzystać na darmową rezerwację biletu lub odbiór poniższych nagród.</p>
                <p>W celu odbioru nagrody rzeczowej, zapraszamy do siedziby firmy.</p>
                <p>Jeden darmowy bilet to 500 punktów.</p>
                <p>Powodzenia!</p>

                <div className={styles.gifts_wrapper} >
                    <div className={styles.gifts1}><p>Słuchawki<br/>2000 punktów </p></div>
                    <div className={styles.gifts2}><p>Nóż karambit<br/>4000 punktów</p></div>
                    <div className={styles.gifts3}><p>Toyota SUV<br/>100 000 punktów</p></div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=dispatch=>({
    fetchUserPoints:(user)=>dispatch(fetchUserPoints(user)),
});

const mapStateToProps = state=>({
    points:getPoints(state),
    userLogin: state.userLogin,
})


export default connect(mapStateToProps,mapDispatchToProps)(Loyality);

